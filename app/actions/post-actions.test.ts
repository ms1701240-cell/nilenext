import { describe, it, expect, vi, beforeEach } from 'vitest';
import { postaction } from './post-action';
import { db } from '@/lib/db';
import { auth } from '@/auth';

// 1. عمل Mock لمكتبة المصادقة وقاعدة البيانات (عشان يبقوا تحت السيطرة)
vi.mock('@/auth', () => ({
  auth: vi.fn(),
}));

vi.mock('@/lib/db', () => ({
  db: {
    post: {
      create: vi.fn(),
    },
  },
}));

describe('postaction Server Action Unit Tests', () => {
  
  // تصفير الـ Mocks قبل كل اختبار عشان نبدأ على نظافة
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // ----------------------------------------------------
  // الحالة الأولى: المستخدم مش مسجل دخول (Unauthenticated)
  // ----------------------------------------------------
  it('returns error when user is not authenticated', async () => {
    // بنخلي الـ auth ترجع null (يعني محدش عامل لوجين)
    vi.mocked(auth).mockResolvedValue(null as any);

    const formData = new FormData();
    formData.append('title', 'Test Title');
    formData.append('content', 'This is a test content that is long enough.');

    const result = await postaction({ success: false, message: '' }, formData);

    // بنتاكد إنه رجع خطأ ومحاولش يكلم الداتابيز أصلاً
    expect(result.success).toBe(false);
    expect(result.message).toContain('يجب تسجيل الدخول أولاً');
    expect(db.post.create).not.toHaveBeenCalled(); // الداتابيز متكلمتش!
  });

  // ----------------------------------------------------
  // الحالة الثانية: البيانات مدخلة غلط (Invalid Zod Data)
  // ----------------------------------------------------
  it('returns validation errors when Zod schema fails', async () => {
    // بنخلي الـ auth ترجع مستخدم مسجل دخول عادي
    vi.mocked(auth).mockResolvedValue({
      user: { id: 'user_123', name: 'Test User' },
    } as any);

    const formData = new FormData();
    formData.append('title', 'Hi'); // عنوان قصير جداً مخالف لـ Zod
    formData.append('content', 'Short'); // محتوى قصير

    const result = await postaction({ success: false, message: '' }, formData);

    expect(result.success).toBe(false);
    expect(result.errors).toBeDefined(); // بيدينا أخطاء الحقول
    expect(db.post.create).not.toHaveBeenCalled(); // الداتابيز مقربتلهاش أصلاً
  });

  // ----------------------------------------------------
  // الحالة الثالثة: الحالة الناجحة (Happy Path)
  // ----------------------------------------------------
  it('successfully creates a post when inputs and session are valid', async () => {
    vi.mocked(auth).mockResolvedValue({
      user: { id: 'user_123', name: 'Test User' },
    } as any);

    // بنخليه ينجح وهمياً
    vi.mocked(db.post.create).mockResolvedValue({ id: 'post_1' } as any);

    const formData = new FormData();
    formData.append('title', 'Valid Post Title');
    formData.append('content', 'This is a fully valid post content that passes all checks.');

    const result = await postaction({ success: false, message: '' }, formData);

    expect(result.success).toBe(true);
    // بنتأكد إن دالة الإنشاء في بريزما اتنادت بالمعرفات الصح
    expect(db.post.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          title: 'Valid Post Title',
          authorId: 'user_123', // ربط المقال بصاحبه
        }),
      })
    );
  });

});
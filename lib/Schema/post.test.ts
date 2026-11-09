
import { describe, it, expect } from 'vitest';
import { PostSchema } from './postschema';


describe('PostSchema Unit Tests', () => {

  // 1. اختبار الحالة السليمة (Happy Path)
  it('passes validation for valid inputs', () => {
    const result = PostSchema.safeParse({
      title: 'Valid Title',
      content: 'This is sufficiently long post content.',
    });
    
    // بنتأكد إن الـ success بقت true لأن البيانات مطابقة للشروط
    expect(result.success).toBe(true);
  });

  // 2. اختبار الحالة الخاطئة (العنوان القصير)
  it('fails validation when title is under 3 characters', () => {
    const result = PostSchema.safeParse({ 
      title: 'Hi', // العنوان حرفين بس (مخالف للشروط)
      content: 'Valid content here' 
    });

    // بنتأكد إن الـ success بقت false (تم رفض البيانات)
    expect(result.success).toBe(false);

    // بنفحص رسالة الخطأ بالتحديد عشان نتأكد إنها الرسالة الصح
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.title).toContain('Title must be at least 3 characters');
    }
  });

  // 3. اختبار تنظيف المسافات (Whitespace Trimming)
  it('trims whitespace from inputs', () => {
    const result = PostSchema.safeParse({
      title: '   Valid Title   ', // مسافات في الأول والأخر
      content: '   This is valid content with spaces.   ',
    });

    expect(result.success).toBe(true);
    if (result.success) {
      // بنتاكد إن الـ Zod نظف المسافات الزائدة لو كنا مستخدمين .trim() في الـ Schema
      expect(result.data.title).toBe('Valid Title');
    }
  });

  // 4. اختبار الكائنات الفارغة (Empty Objects)
  it('fails gracefully when object is empty', () => {
    const result = PostSchema.safeParse({});
    
    // مفروض يرفضها من غير ما يضرب Exception أو يوقع التطبيق
    expect(result.success).toBe(false);
  });

});
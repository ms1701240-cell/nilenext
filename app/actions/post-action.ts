'use server';

import { PostSchema } from "@/lib/Schema/postschema";
import { db } from "@/lib/db"; // استيراد Prisma Client
import { auth } from "@/auth";   // استيراد الجلسة لمعرفة المستخدم الحالي
import { revalidatePath } from "next/cache";

export type ActionState = {
  success: boolean;
  message: string;
  errors?: {
    title?: string[];
    content?: string[];
  };
};

export async function postaction(prevstate: ActionState, formData: FormData): Promise<ActionState> {
  // 1. التحقق من صلاحية الجلسة (يجب أن يكون المستخدم مسجل دخول ليتمكن من إنشاء مدونة)
  const session = await auth();
  if (!session || !session.user?.id) {
    return {
      success: false,
      message: "يجب تسجيل الدخول أولاً لإنشاء مقال جديد.",
    };
  }

  // 2. التحقق من صحة المدخلات عبر Zod Schema
  const result = PostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      success: false,
      message: "يرجى تصحيح الأخطاء الموجودة في النموذج.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    // 3. حفظ المقال في قاعدة البيانات عبر Prisma وربطه بالمستخدم الحالي
    await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        authorId: session.user.id, // ربط المقال بـ ID المستخدم المسجل
      },
    });

    // إعادة تحميل مسار المدونة أو الـ Dashboard لتحديث البيانات المعروضة
    revalidatePath("/blog");
    revalidatePath("/dashboard");

    return {
      success: true,
      message: "تم إنشاء المقال وحفظه في قاعدة البيانات بنجاح! 🎉",
    };
  } catch (error) {
    console.error("Error creating post:", error);
    return {
      success: false,
      message: "حدث خطأ أثناء حفظ المقال في قاعدة البيانات.",
    };
  }
}
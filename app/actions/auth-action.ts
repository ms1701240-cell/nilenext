'use server';

import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export type AuthActionState = {
  success: boolean;
  message: string;
};

// 1. دالة إنشاء حساب جديد (Sign Up Action)
export async function signupAction(
  prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!name || !email || !password) {
    return { success: false, message: "يرجى ملء جميع الحقول المطلوبة." };
  }

  try {
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { success: false, message: "البريد الإلكتروني مستخدم بالفعل." };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // تم إزالة السطر أو استخدام القيمة الصحيحة من الـ Enum الموجود في السكيما
    await db.user.create({
      data: {
        name,
        email,
        passwordHash: hashedPassword,
         // أو يمكنك حذفه نهائياً ليعتمد على القيمة الافتراضية @default(VIEWER)
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    return { success: false, message: "حدث خطأ أثناء إنشاء الحساب." };
  }

  redirect("/login");
}

// 2. دالة تسجيل الدخول (Login Action)
export async function loginAction(
  prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { success: false, message: "يرجى إدخال البريد وكلمة المرور." };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { success: false, message: "البريد الإلكتروني أو كلمة المرور غير صحيحة." };
        default:
          return { success: false, message: "حدث خطأ ما، يرجى المحاولة لاحقاً." };
      }
    }
    throw error;
  }

  return { success: true, message: "تم تسجيل الدخول بنجاح" };
}
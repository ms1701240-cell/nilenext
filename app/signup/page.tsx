'use client';

import { useActionState } from "react";
import { signupAction, AuthActionState } from "@/app/actions/auth-action";
import Link from "next/link";

const initialState: AuthActionState = {
  success: false,
  message: "",
};

export default function SignUpPage() {
  const [state, formAction, pending] = useActionState(signupAction, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">إنشاء حساب جديد 🚀</h1>
          <p className="mt-2 text-sm text-slate-500">سجل حسابك الآن لنشر مقالاتك في المدونة</p>
        </div>

        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">الاسم الكامل</label>
            <input
              type="text"
              name="name"
              required
              placeholder="اكتب اسمك..."
              className="mt-1 w-full rounded-lg border border-slate-300 p-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              required
              placeholder="name@example.com"
              className="mt-1 w-full rounded-lg border border-slate-300 p-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">كلمة المرور</label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border border-slate-300 p-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {state?.message && (
            <p className="rounded-lg bg-red-50 p-3 text-center text-sm font-medium text-red-600">
              {state.message}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-lg bg-slate-900 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 disabled:opacity-50"
          >
            {pending ? "جاري إنشاء الحساب..." : "إنشاء الحساب"}
          </button>
        </form>

        <p className="text-center text-sm text-slate-500">
          لديك حساب بالفعل؟{" "}
          <Link href="/login" className="font-medium text-blue-600 hover:underline">
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  );
}
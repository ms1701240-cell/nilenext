import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import {db} from "@/lib/db"
import bcrypt from "bcrypt"

export const { handlers, auth, signIn, signOut } = NextAuth({
  // 1. ربط قاعدة البيانات: بنقول لـ Auth.js استعمل Prisma عشان تخزن اليوزرات والبيانات في PostgreSQL
  adapter: PrismaAdapter(db),

  // 2. استراتيجية الجلسة: بنختار JWT عشان نقدر نقراها بسهولة من الـ Middleware (حارس الأمن) من غير ما نرجع للداتا بيز كل مرة
  session: { strategy: "jwt" },

  // 3. طرق تسجيل الدخول (Providers)
  providers: [
    // أ. تسجيل الدخول عبر GitHub
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),

    // ب. تسجيل الدخول التقليدي (الإيميل وكلمة المرور)
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // الدالة دي بتشتغل أول ما اليوزر يدوس زرار تسجيل الدخول
      async authorize(credentials) {
        // التأكد إن الإيميل والباسورد مش فاضيين
        if (!credentials?.email || !credentials?.password) {
          throw new Error("الرجاء إدخال البريد الإلكتروني وكلمة المرور")
        }

        // البحث عن المستخدم في داتا بيز البريزما بواسطة الإيميل
        const user = await db.user.findUnique({
          where: { email: credentials.email as string },
        })

        // لو اليوزر مش موجود أو ملوش باسورد (مسجل بجيت هب مثلاً) ارمي إيرور
        if (!user || !user.passwordHash) {
          throw new Error("المستخدم غير موجود أو ليس لديه كلمة مرور")
        }

        // مقارنة الباسورد اللي كتبه اليوزر بالباسورد المشفر (Hash) في الداتا بيز
        const isPasswordValid = await bcrypt.compare(
          credentials.password as string,
          user.passwordHash
        )

        // لو الباسورد غلط
        if (!isPasswordValid) {
          throw new Error("كلمة المرور غير صحيحة")
        }

        // لو كله تمام، رجع بيانات اليوزر (وهنا بنمرر الـ role عشان الصلاحيات RBAC)
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role, // دي اللي بتحدد هل هو ADMIN ولا EDITOR ولا VIEWER
        }
      },
    }),
  ],

  // 4. خطافات الأحداث (Callbacks): دي اللي بتخيط الصلاحيات جوه الكرنيه (Token و Session)
  callbacks: {
    // بيحط الـ role جوه الـ JWT Token أول ما اليوزر يسجل دخول
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    // بياخد الـ role من التوكن ويحطه في الـ Session عشان يظهر في الـ Frontend
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string
        session.user.role = token.role as any
      }
      return session
    },
  },

  // 5. تخصيص الصفحات: توجيه اليوزر لصفحة اللوجين المخصصة بتاعتنا لو حاول يفتح صفحة محمية
  pages: {
    signIn: "/login",
  },
})
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function AdminPage() {
  
  const session = await auth()

 
  if (session?.user?.role !== "ADMIN") {
    redirect("/login")
  }

  return (
    <div className="mx-auto max-w-6xl p-6 lg:p-8">
      
      <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            لوحة تحكم الأدمن 🛡️
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            أهلاً بك يا رئيس النظام، هذه اللوحة مخصصة للإدارة العليا فقط.
          </p>
        </div>
        <div className="rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 border border-red-200">
          صلاحية: ADMIN
        </div>
      </div>

      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">إجمالي المستخدمين</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">248</p>
          <span className="mt-2 inline-block text-xs font-medium text-emerald-600">
            +12% هذا الأسبوع
          </span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">إجمالي المقالات</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">45</p>
          <span className="mt-2 inline-block text-xs font-medium text-blue-600">
            نشط ومحدث
          </span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">حالة الخادم</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-emerald-600">متصل 🟢</p>
          <span className="mt-2 inline-block text-xs font-medium text-slate-500">
            الكفاءة 99.9%
          </span>
        </div>
      </div>

     
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          إدارة الصلاحيات والعمليات الأخيرة
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm text-slate-600">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-slate-700">
              <tr>
                <th className="px-4 py-3">المستخدم</th>
                <th className="px-4 py-3">البريد الإلكتروني</th>
                <th className="px-4 py-3">الصلاحية (Role)</th>
                <th className="px-4 py-3">الإجراء</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">{session.user?.name || "مشرف النظام"}</td>
                <td className="px-4 py-3">{session.user?.email}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-700">
                    ADMIN
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-blue-600 hover:underline font-medium">تعديل</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
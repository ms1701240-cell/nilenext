
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="mb-5 inline-flex items-center gap-3 rounded-xl border border-amber-300/30 bg-white/5 px-4 py-3">
            <span className="flex size-11 items-center justify-center rounded-lg bg-amber-300 font-bold tracking-wide text-slate-950">
              NU
            </span>
            <span className="text-right">
              <span className="block text-sm font-bold text-white">جامعة النيل</span>
              <span className="block text-xs text-slate-400">Nile University</span>
            </span>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-400">
            مساحة تجمع المعرفة والطموح، وتفتح آفاقًا جديدة للتعلم والابتكار.
          </p>
        </div>

        <div className="text-right">
          <h2 className="mb-4 text-sm font-semibold text-white">روابط سريعة</h2>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="transition hover:text-amber-300">الرئيسية</Link></li>
            <li><Link href="/about" className="transition hover:text-amber-300">عن الجامعة</Link></li>
            <li><Link href="/blog" className="transition hover:text-amber-300">المدونة</Link></li>
            <li><Link href="/dashboard" className="transition hover:text-amber-300">لوحة التحكم</Link></li>
          </ul>
        </div>

        <div className="text-right">
          <h2 className="mb-4 text-sm font-semibold text-white">تواصل معنا</h2>
          <p className="mb-5 text-sm leading-7 text-slate-400">
            للاستفسارات، يرجى التواصل عبر قنوات جامعة النيل الرسمية.
          </p>
          <div className="flex gap-3" aria-label="قنوات التواصل">
            <span title="البريد الإلكتروني" className="flex size-10 items-center justify-center rounded-full border border-slate-700 text-amber-300">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
                <path d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Z" stroke="currentColor" strokeWidth="1.7" />
                <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span title="الهاتف" className="flex size-10 items-center justify-center rounded-full border border-slate-700 text-amber-300">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
                <path d="M7.2 3.5h2.1l1.2 4.1-1.8 1.5a15 15 0 0 0 6.2 6.2l1.5-1.8 4.1 1.2v2.1a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 5.2 5.7a2 2 0 0 1 2-2.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span title="الموقع" className="flex size-10 items-center justify-center rounded-full border border-slate-700 text-amber-300">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
                <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.7" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
          © 2026 جامعة النيل. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  )
}

export default Footer
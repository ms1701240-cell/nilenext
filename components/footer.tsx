import Link from "next/link";

const Footer = () => {
  return (
    <footer dir="rtl" className="bg-[#102d25] text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3 lg:px-10">
        <div>
          <Link href="/" className="mb-5 inline-flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-amber-300 text-lg font-bold text-emerald-950">N</span>
            <span>
              <span className="block text-base font-bold text-white">Nile</span>
              <span className="block text-xs text-emerald-100/60">مساحة للقراءة والكتابة</span>
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-7 text-slate-400">
            نؤمن أن كل فكرة تستحق أن تُقرأ. اقرأ، اكتب، وشارك المعرفة مع مجتمع Nile.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-white">استكشف</h2>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="transition hover:text-amber-300">الرئيسية</Link></li>
            <li><Link href="/about" className="transition hover:text-amber-300">عن الموقع</Link></li>
            <li><Link href="/#latest-articles" className="transition hover:text-amber-300">أحدث المقالات</Link></li>
            <li><Link href="/blog/new" className="transition hover:text-amber-300">اكتب مقالًا</Link></li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-sm font-semibold text-white">لديك فكرة؟</h2>
          <p className="mt-2 text-sm leading-7 text-slate-400">
            حوّل ما تعرفه إلى مقال يضيف شيئًا جديدًا إلى الحوار.
          </p>
          <Link href="/blog/new" className="mt-4 inline-flex rounded-full bg-amber-300 px-4 py-2.5 text-sm font-bold text-emerald-950 transition hover:bg-amber-200">
            ابدأ الكتابة <span aria-hidden="true" className="mr-2">←</span>
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-center text-xs text-slate-500 sm:px-8 lg:px-10">
          © 2026 Nile. مساحة للأفكار التي تستحق أن تُقرأ.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

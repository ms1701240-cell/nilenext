import Link from "next/link";

const values = [
  {
    number: "01",
    title: "المعرفة للجميع",
    description: "نؤمن أن الأفكار المفيدة تستحق أن تصل إلى كل من يبحث عنها.",
  },
  {
    number: "02",
    title: "كل صوت مهم",
    description: "لكل شخص تجربة تستحق أن تُروى، ولكل كاتب مساحة يبدأ منها.",
  },
  {
    number: "03",
    title: "النقاش يصنع فرقًا",
    description: "حين نتبادل وجهات النظر، تتحول القراءة إلى حوار وتعلّم.",
  },
];

export default function AboutPage() {
  return (
    <main dir="rtl" className="overflow-hidden bg-[#faf9f6] text-slate-950">
      <section className="relative border-b border-slate-200">
        <div aria-hidden="true" className="absolute -left-20 -top-32 size-80 rounded-full bg-[#e7eee6]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800">
            <span className="size-2 rounded-full bg-amber-500" />
            الحكاية وراء Nile
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.35] tracking-tight sm:text-5xl lg:text-6xl">
            مساحة تجمعنا حول
            <span className="text-emerald-800"> قوة الكلمة.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-600">
            بدأ Nile من إيمان بسيط: فكرة واحدة مكتوبة بصدق قد تلهم شخصًا،
            وتفتح نقاشًا، وتترك أثرًا. لذلك بنينا مساحة تجعل مشاركة المعرفة
            والقراءة أقرب إلى الجميع.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
        <div>
          <p className="text-sm font-semibold text-emerald-800">لماذا نحن هنا؟</p>
          <h2 className="mt-3 text-3xl font-bold leading-relaxed">الكتابة بداية مشاركة، والقراءة بداية اكتشاف.</h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-slate-600">
          <p>
            Nile منصة للمقالات والأفكار؛ مكان يلتقي فيه من يحب القراءة بمن
            لديه ما يكتبه. نريد أن تكون التجربة بسيطة: تكتشف مقالًا جديدًا،
            تتعلم شيئًا، ثم تشارك ما تعرفه مع الآخرين.
          </p>
          <p>
            سواء كنت تكتب للمرة الأولى أو تبحث عن منظور مختلف، ستجد هنا مساحة
            مفتوحة للتعلّم والتعبير. كل مقال يضيف صوتًا جديدًا إلى الحوار.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mb-9 max-w-xl">
            <p className="text-sm font-semibold text-emerald-800">ما نؤمن به</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">ثلاث أفكار تقود كل ما نكتبه</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.number} className="rounded-2xl border border-slate-200 bg-[#faf9f6] p-6 sm:p-7">
                <span className="flex size-11 items-center justify-center rounded-xl bg-[#e7eee6] text-sm font-bold text-emerald-900">
                  {value.number}
                </span>
                <h3 className="mt-6 text-xl font-bold">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="rounded-[2rem] bg-[#173f32] px-7 py-9 text-white sm:px-10 sm:py-11">
          <p className="text-sm font-medium text-amber-300">مكانك بيننا</p>
          <div className="mt-3 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">اقرأ فكرة جديدة، أو شارك فكرتك.</h2>
              <p className="mt-3 text-sm leading-7 text-emerald-100/80">كل بداية عظيمة قد تكون مقالًا تكتبه اليوم.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/#latest-articles" className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                تصفح المقالات
              </Link>
              <Link href="/blog/new" className="rounded-full bg-amber-300 px-5 py-3 text-sm font-bold text-emerald-950 transition hover:bg-amber-200">
                اكتب مقالك
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

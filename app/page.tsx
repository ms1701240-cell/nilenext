import Link from "next/link";
import { getposts } from "@/lib/posts";
import { HeroImage } from "@/components/hero-image";
export default async function HomePage() {
  const posts = await getposts();

  return (
    <main dir="rtl" className="overflow-hidden bg-[#faf9f6] text-slate-950">
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:py-28">
        <div className="relative z-10">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white px-4 py-2 text-sm font-medium text-emerald-900 shadow-sm">
            <span className="size-2 rounded-full bg-amber-500" />
            مساحة للأفكار التي تستحق أن تُقرأ
          </span>
          <h1 className="max-w-2xl text-5xl font-bold leading-[1.25] tracking-tight sm:text-6xl lg:text-7xl">
            كل فكرة عظيمة
            <br />
            تبدأ <span className="text-emerald-800">بكلمة.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-9 text-slate-600 sm:text-xl">
            Nile مساحة مفتوحة للقراءة والكتابة ومشاركة المعرفة. اكتشف مقالات
            تلهمك، أو ابدأ بكتابة الفكرة التي تدور في ذهنك.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/#latest-articles"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
            >
              اكتشف المقالات
              <span aria-hidden="true">←</span>
            </Link>
            <Link
              href="/blog/new"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-emerald-800 hover:text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
            >
              اكتب مقالك
            </Link>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500">
            <span className="flex -space-x-2 space-x-reverse">
              <span className="flex size-9 items-center justify-center rounded-full border-2 border-[#faf9f6] bg-amber-100 text-amber-900">ق</span>
              <span className="flex size-9 items-center justify-center rounded-full border-2 border-[#faf9f6] bg-emerald-100 text-emerald-900">ك</span>
              <span className="flex size-9 items-center justify-center rounded-full border-2 border-[#faf9f6] bg-sky-100 text-sky-900">ف</span>
            </span>
            <p>اقرأ، تعلّم، وشارك صوتك مع مجتمع من الكُتّاب.</p>
          </div>
        </div>

        <HeroImage
          src="/images/hero-image.jpg"
          alt="صورة توضيحية لمجتمع Nile"
          width={500}
          height={480}
          priority
          
        />
      </section>

      <section className="border-y border-slate-200/80 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3 sm:px-8 lg:px-10">
          {[
            { number: "اقرأ", title: "أفكار من زوايا مختلفة", text: "مقالات متنوعة تفتح لك أبوابًا جديدة للتفكير." },
            { number: "تعلّم", title: "معرفة قريبة منك", text: "محتوى واضح وملهم يمكنك العودة إليه في أي وقت." },
            { number: "اكتب", title: "صوتك له مكان", text: "حوّل خبرتك وأسئلتك إلى كلمات تصل للآخرين." },
          ].map((item, index) => (
            <div key={item.number} className={`flex gap-4 ${index > 0 ? "sm:border-r sm:border-slate-200 sm:pr-8" : ""}`}>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#edf3ed] text-sm font-bold text-emerald-900">
                0{index + 1}
              </span>
              <div>
                <h2 className="font-bold">{item.title}</h2>
                <p className="mt-1 text-sm leading-6 text-slate-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="latest-articles" className="mx-auto max-w-6xl scroll-mt-8 px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold text-emerald-800">من المجتمع</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">أحدث المقالات</h2>
          </div>
          <Link href="/blog/new" className="text-sm font-semibold text-emerald-800 transition hover:text-emerald-600">
            شاركنا مقالك <span aria-hidden="true">←</span>
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 6).map((post, index) => (
              <article key={post.id} className="group flex min-h-64 flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-900/20 hover:shadow-lg">
                <div className="mb-5 flex items-center justify-between text-xs text-slate-500">
                  <span className="rounded-full bg-[#edf3ed] px-3 py-1 font-medium text-emerald-900">مقالة</span>
                  <time dateTime={post.createdAt.toISOString()}>
                    {post.createdAt.toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                </div>
                <h3 className="text-xl font-bold leading-8 text-slate-900 group-hover:text-emerald-900">
                  <Link href={`/blog/${post.id}`} className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                  {post.content}
                </p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-xs text-slate-500">
                  <span>{post.author.name || "كاتب من مجتمع Nile"}</span>
                  <span aria-hidden="true" className="text-lg text-emerald-800 transition group-hover:-translate-x-1">←</span>
                </div>
                <span className="sr-only">المقال رقم {index + 1}</span>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <span aria-hidden="true" className="text-3xl text-emerald-800">✳</span>
            <h3 className="mt-4 text-xl font-bold">كن أول من يشارك فكرة</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">لا توجد مقالات منشورة بعد. ابدأ الحوار بمقالك الأول.</p>
            <Link href="/blog/new" className="mt-5 inline-flex rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
              اكتب أول مقال
            </Link>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-[#173f32] px-7 py-9 text-white sm:flex-row sm:items-center sm:px-10 sm:py-11">
          <div>
            <p className="text-sm font-medium text-amber-300">فكرتك تستحق أن تُروى</p>
            <h2 className="mt-2 text-2xl font-bold leading-relaxed sm:text-3xl">ابدأ الكتابة، ودع كلماتك تجد طريقها.</h2>
          </div>
          <Link href="/blog/new" className="shrink-0 rounded-full bg-amber-300 px-6 py-3.5 text-sm font-bold text-emerald-950 transition hover:bg-amber-200">
            اكتب مقالك الآن
          </Link>
        </div>
      </section>
    </main>
  );
}

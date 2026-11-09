import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}
export function HeroImage({ src, alt, priority = false }: HeroImageProps) {
  return (
    <div className="relative mx-auto flex min-h-[390px] w-full max-w-[500px] items-center justify-center sm:min-h-[480px]">
      <div aria-hidden="true" className="absolute inset-4 rounded-[45%] bg-[#e7eee6] sm:inset-8" />
      <div aria-hidden="true" className="absolute right-8 top-10 size-16 rounded-full bg-amber-300 sm:right-14 sm:top-12 sm:size-20" />
      <div aria-hidden="true" className="absolute bottom-12 left-4 h-28 w-28 rounded-full border border-emerald-900/15 sm:bottom-16 sm:left-8 sm:h-36 sm:w-36" />
      
      {/* هنا بنستخدم next/image بدل الديفات التقليدية للكرت الرئيسي */}
      <div className="relative z-10 w-[78%] rotate-[-4deg] rounded-[1.75rem] border border-white/80 bg-white p-3 shadow-[0_30px_90px_-38px_rgba(15,55,42,0.42)] sm:p-4 overflow-hidden">
        <div className="relative min-h-[290px] w-full flex flex-col justify-between rounded-[1.25rem] bg-[#173f32] p-6 text-white sm:min-h-[340px] sm:p-8">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover opacity-90"
          />
          <div className="relative z-10 flex items-center justify-between text-xs text-emerald-100/70">
            <span>دفتر الأفكار</span>
            <span>01 / 03</span>
          </div>
          <div className="relative z-10">
            <span className="mb-4 block text-sm text-amber-300">مساحة للمعرفة</span>
            <p className="text-3xl font-semibold leading-relaxed sm:text-4xl">
              اكتب ما
              <br />
              يستحق أن
              <br />
              يبقى.
            </p>
          </div>
          <div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-4 text-xs text-emerald-100/70">
            <span>Nile Journal</span>
            <span>✳</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-0 z-20 max-w-[190px] rotate-[4deg] rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:bottom-16 sm:right-2">
        <p className="text-xs text-slate-500">فكرة اليوم</p>
        <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
          المعرفه تكبر حين نتشاركها.
        </p>
      </div>
      <span aria-hidden="true" className="absolute left-12 top-16 text-4xl text-emerald-800">✳</span>
    </div>
  );
}
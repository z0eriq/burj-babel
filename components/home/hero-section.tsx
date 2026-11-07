import Link from "next/link";
import { BadgeCheck, Truck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

/** القسم الأول: العنوان، أزرار الدعوة، ورسم البرج. */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="babel-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute -top-24 start-0 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 end-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />

      <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24 lg:pb-32">
        <div className="animate-rise">
          <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-bold text-amber-200">
            تجارة بالجملة · الحلة، بابل
          </p>
          <h1
            className="mt-5 text-4xl font-extrabold leading-tight text-balance md:text-5xl lg:text-6xl"
            aria-label="برج بابل - شريكك الموثوق في التجارة بالجملة"
          >
            <span className="block">برج بابل</span>
            <span className="mt-3 block text-[0.62em] font-bold text-[#FCD34D]">
              شريكك الموثوق في التجارة بالجملة
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#E8EEF9] md:text-lg">
            من قلب الحلة نزوّد التجار والمحال والموزعين بالوكالات الغذائية، ومستحضرات العناية، والمواد
            الغذائية، ومواد التنظيف — بأسعار جملة وجودة يمكن الاعتماد عليها.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg">
              <Link href="/contact">تواصل معنا</Link>
            </Button>
            <Button asChild variant="light" size="lg">
              <Link href="/products">تصفح المنتجات</Link>
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-blue-100">
            <li className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-brand-gold" aria-hidden="true" />
              أسعار جملة
            </li>
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-gold" aria-hidden="true" />
              جودة مضمونة
            </li>
            <li className="inline-flex items-center gap-2">
              <Truck className="h-4 w-4 text-brand-gold" aria-hidden="true" />
              توريد للحلة وبابل
            </li>
          </ul>
        </div>

        <div className="animate-rise [animation-delay:140ms]">
          <BabelArt />
        </div>
      </div>
    </section>
  );
}

function BabelArt() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <svg viewBox="0 0 420 460" className="h-auto w-full drop-shadow-2xl" role="img" aria-label="رسم هندسي مستوحى من برج مدرج">
        <rect x="8" y="8" width="404" height="444" rx="36" fill="#0B1F4D" />
        <circle cx="318" cy="92" r="46" fill="#F59E0B" />
        <circle cx="318" cy="92" r="26" fill="#FBBF24" />
        <path fill="#1E3A8A" d="M58 332h304v34H58z" />
        <path fill="#2451b8" d="M82 292h256v32H82z" />
        <path fill="#1E3A8A" d="M108 252h204v32H108z" />
        <path fill="#2451b8" d="M136 212h148v32H136z" />
        <path fill="#F59E0B" d="M164 166h92v38H164z" />
        <path fill="#FBBF24" d="M188 124h44v34h-44z" />
        <rect x="196" y="286" width="28" height="80" rx="3" fill="#071433" />
        <path d="M48 386h324" stroke="#F59E0B" strokeWidth="4" />
        <path d="M70 404h280" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
      </svg>
      <div className="absolute bottom-8 start-6 rounded-2xl bg-white px-4 py-3 text-brand-navy shadow-card sm:start-8">
        <p className="text-xs font-bold text-amber-800">من الحلة إلى تاجر الجملة</p>
        <p className="mt-1 text-sm font-extrabold">توريد مباشر وبأسعار واضحة</p>
      </div>
    </div>
  );
}

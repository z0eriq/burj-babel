import Link from "next/link";
import { Apple, ArrowLeft, Sparkles, SprayCan, Warehouse } from "lucide-react";
import { specialties } from "@/data/company";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const icons = {
  "food-agency": Warehouse,
  cosmetics: Sparkles,
  food: Apple,
  cleaning: SprayCan,
} as const;

/** أربع بطاقات للتخصصات مع رابط إلى المنتجات المصنّفة. */
export function SpecialtiesSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="تخصصاتنا"
            title="أربعة أبواب للتوريد"
            description="كل باب يغطي حاجة يومية لتجار الجملة: وكالات أساسية، عناية، غذاء معلب وعصائر، ومواد تنظيف."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {specialties.map((item, index) => {
            const Icon = icons[item.id];
            return (
              <Reveal key={item.id} delay={index * 70}>
                <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-brand-canvas p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-brand-navy">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-xs font-extrabold text-amber-800">0{index + 1}</p>
                  <h3 className="mt-1 text-xl font-extrabold text-brand-navy">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{item.description}</p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-extrabold text-brand-navy"
                  >
                    عرض المنتجات
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

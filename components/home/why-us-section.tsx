import { Award, CircleDollarSign, ShieldCheck, Truck } from "lucide-react";
import { reasons } from "@/data/company";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const icons = {
  price: CircleDollarSign,
  quality: ShieldCheck,
  delivery: Truck,
  experience: Award,
} as const;

/** أسباب التعامل مع برج بابل. */
export function WhyUsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="لماذا تختارنا"
            title="توريد يمكن بناء جدولك الأسبوعي عليه"
            description="السعر، الجودة، الموعد، ومعرفة السوق المحلي. هذه الأربع هي ما يسأله التاجر قبل أن يكرر الطلب."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = icons[reason.id];
            return (
              <Reveal key={reason.id} delay={index * 70}>
                <article className="h-full rounded-2xl border border-amber-100 bg-amber-50/60 p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-brand-gold">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-brand-navy">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{reason.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

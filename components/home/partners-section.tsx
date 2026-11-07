import { partners } from "@/data/company";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

/** شعارات توضيحية بانتظار شعارات الوكالات الفعلية. */
export function PartnersSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="شركاء ووكالات"
            title="مساحة شعارات شركاء التوريد"
            description="أماكن مخصصة لشعارات الوكالات التي نتعامل معها. الأسماء أدناه توضيحية إلى أن تُستبدل بالعلامات المعتمدة."
          />
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <li
              key={partner.name}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 transition hover:border-brand-gold"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-navy text-xl font-extrabold text-brand-gold">
                {partner.name.slice(0, 1)}
              </span>
              <span>
                <span className="block font-extrabold text-brand-navy">{partner.name}</span>
                <span className="mt-1 block text-sm text-slate-500">{partner.sector}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

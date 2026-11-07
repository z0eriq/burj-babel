import type { Metadata } from "next";
import Link from "next/link";
import { Eye, Target } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { StatsGrid } from "@/components/stats-grid";
import { Button } from "@/components/ui/button";
import { steps, values } from "@/data/company";

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "قصة برج بابل في الحلة: رؤية الشركة ورسالتها وقيم العمل في تجارة الجملة الغذائية والتجميل والتنظيف.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "من نحن | برج بابل",
    description:
      "قصة برج بابل في الحلة: رؤية الشركة ورسالتها وقيم العمل في تجارة الجملة الغذائية والتجميل والتنظيف.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        current="من نحن"
        title="من الحلة، نرتب تجارة الجملة بوضوح"
        description="برج بابل بيت تجاري يخدم أصحاب المحال والموزعين والمؤسسات في محافظة بابل وما حولها. التشكيلة متنوعة، والتعامل مباشر."
      />

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-brand-navy">قصة الشركة</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
              <p>
                انطلقت برج بابل من مدينة الحلة لتكون حلقة وصل موثوقة بين الوكالات والمورّدين وتجار الجملة في
                محافظة بابل. نعمل مع أصحاب المحال والموزعين والمؤسسات لنوفّر تشكيلة تُطلب بكميات الجملة.
              </p>
              <p>
                نجمع في مكان واحد أربع مجموعات يحتاجها السوق أسبوعياً: الوكالات الغذائية، مستحضرات التجميل
                والعناية، المواد الغذائية من عصائر وسكاكر ومعلبات، ومواد وأدوات التنظيف.
              </p>
              <p>
                نجهّز البضاعة بكميات الجملة، ونحافظ على أصناف يمكن للتاجر إعادة بيعها. السعر يُثبت قبل
                التحميل، والمتابعة تبقى بعد التسليم.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <aside className="rounded-3xl bg-brand-deep p-8 text-white">
              <p className="text-sm font-bold text-amber-300">طريقة العمل</p>
              <ol className="mt-5 space-y-5">
                {steps.map((step) => (
                  <li key={step.number} className="flex gap-4">
                    <span className="text-lg font-extrabold text-brand-gold">{step.number}</span>
                    <span>
                      <span className="block font-extrabold">{step.title}</span>
                      <span className="mt-1 block text-sm leading-7 text-blue-100">{step.description}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 p-7">
              <Eye className="h-7 w-7 text-brand-gold" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-extrabold text-brand-navy">الرؤية</h2>
              <p className="mt-3 leading-8 text-slate-700">
                أن نكون الاسم الذي يقصده تاجر الجملة في بابل عندما يبحث عن توريد ثابت ومتنوع، من غير دوران بين
                عدة موردين لنفس القائمة الأسبوعية.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-200 p-7">
              <Target className="h-7 w-7 text-brand-gold" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-extrabold text-brand-navy">الرسالة</h2>
              <p className="mt-3 leading-8 text-slate-700">
                توفير أصناف الجملة الأساسية بجودة منتظمة وسعر تنافسي وخدمة يمكن الاعتماد عليها، مع التزام
                بالموعد وبالصنف المتفق عليه.
              </p>
            </article>
          </div>

          <h2 className="mt-14 text-3xl font-extrabold text-brand-navy">قيمنا</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl bg-amber-50 p-5">
                <h3 className="text-lg font-extrabold text-brand-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <h2 className="text-3xl font-extrabold text-brand-navy">بالأرقام</h2>
          <p className="mt-3 max-w-2xl leading-8 text-slate-600">
            خبرة في سوق الجملة، وقاعدة تجار نخدمها، وتشكيلة تغطي قطاعات التوريد الأربعة.
          </p>
          <StatsGrid className="mt-8" />
          <div className="mt-10">
            <Button asChild variant="gold">
              <Link href="/contact">تحدث مع المبيعات</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

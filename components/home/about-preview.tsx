import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

/** نبذة قصيرة عن الشركة مع إحالة إلى صفحة القصة. */
export function AboutPreview() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            eyebrow="من نحن"
            title="بيت جملة من الحلة، بتشكيلة يطلبها السوق كل أسبوع"
            description="برج بابل حلقة وصل بين الوكالات والمورّدين وتجار الجملة في محافظة بابل. نجهّز المحال والموزعين والمؤسسات بأصناف تُعاد بيعها بثقة، وبكلام واضح في السعر قبل التحميل."
          />
          <Button asChild className="mt-6">
            <Link href="/about">
              اقرأ قصتنا
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <blockquote className="rounded-3xl bg-brand-navy p-8 text-white shadow-card md:p-10">
            <p className="text-2xl font-extrabold leading-10">
              «نبيع بالجملة لمن يبيع بالتجزئة — وضوح في الصنف، والسعر، والموعد.»
            </p>
            <footer className="mt-6 text-sm font-bold text-amber-200">برج بابل · الحلة</footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

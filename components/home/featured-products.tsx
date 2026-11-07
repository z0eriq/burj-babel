import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/data/products";

/** ثمانية أصناف مختارة من الكتالوج التجريبي. */
export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="منتجات مميزة"
            title="أصناف تُطلب بالجملة باستمرار"
            description="نماذج من التشكيلة. السعر النهائي يُحدد حسب الكمية، والطلب يبدأ من زر «اطلب»."
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/products">كل المنتجات</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((product, index) => (
            <Reveal key={product.id} delay={(index % 4) * 60}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

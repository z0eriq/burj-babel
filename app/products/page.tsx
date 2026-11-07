import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProductsExplorer } from "@/components/products-explorer";
import { isCategoryId, products } from "@/data/products";

export const metadata: Metadata = {
  title: "المنتجات",
  description:
    "تصفح تشكيلة برج بابل للجملة: وكالات غذائية، مستحضرات عناية، مواد غذائية، ومواد تنظيف. اطلب عرض سعر مباشرة.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "المنتجات | برج بابل",
    description:
      "تصفح تشكيلة برج بابل للجملة: وكالات غذائية، مستحضرات عناية، مواد غذائية، ومواد تنظيف.",
    url: "/products",
  },
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string; q?: string };
}) {
  const initialCategory = isCategoryId(searchParams.category) ? searchParams.category : "all";
  const initialQuery = typeof searchParams.q === "string" ? searchParams.q.slice(0, 80) : "";

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "منتجات برج بابل للجملة",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      description: product.description,
      sku: product.sku,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList).replace(/</g, "\\u003c") }}
      />
      <PageHero
        current="المنتجات"
        title="تشكيلة الجملة"
        description="وكالات غذائية، تجميل وعناية، مواد غذائية، ومواد تنظيف. صفِّ النتائج أو ابحث، ثم اطلب عرض السعر."
      />
      <section className="py-12 md:py-16">
        <div className="container-page">
          <ProductsExplorer initialCategory={initialCategory} initialQuery={initialQuery} />
        </div>
      </section>
    </>
  );
}

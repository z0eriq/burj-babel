"use client";

import { useMemo, useState } from "react";
import { Package, Search } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Input } from "@/components/ui/input";
import { categories, products, type CategoryId } from "@/data/products";
import { formatProductCount } from "@/lib/arabic";
import { cn } from "@/lib/utils";

function normalizeSearch(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/\s+/g, " ");
}

/** شبكة المنتجات مع البحث والتصفية حسب الفئة. */
export function ProductsExplorer({
  initialCategory,
  initialQuery,
}: {
  initialCategory: CategoryId | "all";
  initialQuery: string;
}) {
  const [category, setCategory] = useState<CategoryId | "all">(initialCategory);
  const [query, setQuery] = useState(initialQuery);

  const activeCategory = categories.find((item) => item.id === category);

  const filtered = useMemo(() => {
    const needle = normalizeSearch(query);
    return products.filter((product) => {
      if (category !== "all" && product.category !== category) return false;
      if (!needle) return true;
      const categoryName = categories.find((item) => item.id === product.category)?.name ?? "";
      const haystack = normalizeSearch(`${product.name} ${product.description} ${product.sku} ${categoryName}`);
      return haystack.includes(needle);
    });
  }, [category, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <label htmlFor="product-search" className="sr-only">
            ابحث في المنتجات
          </label>
          <Search
            className="pointer-events-none absolute start-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <Input
            id="product-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ابحث بالاسم أو الرمز أو الصنف..."
            className="ps-11"
          />
        </div>
        <p className="text-sm font-bold text-slate-600">{formatProductCount(filtered.length)}</p>
      </div>

      <div role="group" aria-label="تصفية حسب الفئة" className="mt-4 flex flex-wrap gap-2">
        <FilterChip active={category === "all"} onClick={() => setCategory("all")}>
          الكل
        </FilterChip>
        {categories.map((item) => (
          <FilterChip key={item.id} active={category === item.id} onClick={() => setCategory(item.id)}>
            {item.name}
          </FilterChip>
        ))}
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        {activeCategory
          ? activeCategory.description
          : "أربع مجموعات للجملة. اختر الفئة أو ابحث عن صنف، ثم أرسل طلب عرض السعر."}
      </p>

      {filtered.length > 0 ? (
        <div id="catalog" className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <Package className="mx-auto h-10 w-10 text-brand-navy" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-extrabold text-brand-navy">لا توجد منتجات مطابقة</h2>
          <p className="mt-2 text-sm text-slate-600">جرّب كلمة أخرى أو أعد عرض التشكيلة كاملة.</p>
          <button
            type="button"
            onClick={() => {
              setCategory("all");
              setQuery("");
            }}
            className="mt-5 text-sm font-extrabold text-amber-800 underline-offset-4 hover:underline"
          >
            عرض كل المنتجات
          </button>
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-bold transition",
        active
          ? "border-brand-navy bg-brand-navy text-white"
          : "border-slate-200 bg-white text-slate-700 hover:border-brand-gold",
      )}
    >
      {children}
    </button>
  );
}

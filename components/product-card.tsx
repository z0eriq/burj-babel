import Link from "next/link";
import {
  Apple,
  ArrowLeft,
  Boxes,
  Brush,
  Cookie,
  CupSoda,
  Droplets,
  Fish,
  Package,
  Palette,
  ShoppingBasket,
  Sparkles,
  SprayCan,
  Wheat,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCategory, type CategoryId, type Product, type ProductIcon } from "@/data/products";

const icons: Record<ProductIcon, LucideIcon> = {
  wheat: Wheat,
  droplets: Droplets,
  package: Package,
  "shopping-basket": ShoppingBasket,
  palette: Palette,
  sparkles: Sparkles,
  brush: Brush,
  "cup-soda": CupSoda,
  cookie: Cookie,
  fish: Fish,
  apple: Apple,
  spray: SprayCan,
  boxes: Boxes,
};

const mediaTone: Record<CategoryId, string> = {
  "food-agency": "bg-amber-50",
  cosmetics: "bg-rose-50",
  food: "bg-emerald-50",
  cleaning: "bg-teal-50",
};

const accent: Record<CategoryId, string> = {
  "food-agency": "bg-brand-gold",
  cosmetics: "bg-rose-500",
  food: "bg-emerald-600",
  cleaning: "bg-teal-600",
};

/** بطاقة منتج: صورة أو رمز الفئة، الاسم، الوصف، وزر الطلب. */
export function ProductCard({ product }: { product: Product }) {
  const Icon = icons[product.icon];
  const category = getCategory(product.category);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className={`relative h-40 ${mediaTone[product.category]}`}>
        <span className={`absolute inset-x-0 top-0 h-1 ${accent[product.category]}`} aria-hidden="true" />
        {product.image ? (
          // الصور الاختيارية قد تكون SVG يضيفها فريق الشركة داخل public.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/80 text-brand-navy shadow-sm transition group-hover:scale-105">
              <Icon className="h-10 w-10" aria-hidden="true" />
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{category.short}</Badge>
          {product.featured ? <Badge className="bg-brand-navy text-white">مميز</Badge> : null}
        </div>
        <h3 className="mt-3 text-lg font-extrabold text-slate-900">{product.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-7 text-slate-600">{product.description}</p>
        <p className="mt-3 text-xs font-bold text-slate-500">
          <span dir="ltr">{product.sku}</span>
          <span className="mx-1.5 text-slate-300">·</span>
          {product.unit}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 pt-1">
          <p className="text-xs font-semibold text-amber-800">السعر حسب الكمية</p>
          <Button asChild variant="gold" size="sm">
            <Link href={`/contact?product=${product.id}`}>
              اطلب
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

/**
 * كتالوج تجريبي لمنتجات الجملة.
 * أضف صورة لاحقاً عبر الحقل image بمسار داخل public، مثل: "/products/oil.jpg".
 */

export const categoryIds = ["food-agency", "cosmetics", "food", "cleaning"] as const;

export type CategoryId = (typeof categoryIds)[number];

export type ProductIcon =
  | "wheat"
  | "droplets"
  | "package"
  | "shopping-basket"
  | "palette"
  | "sparkles"
  | "brush"
  | "cup-soda"
  | "cookie"
  | "fish"
  | "apple"
  | "spray"
  | "boxes";

export interface Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  category: CategoryId;
  unit: string;
  featured: boolean;
  icon: ProductIcon;
  /** مسار اختياري لصورة حقيقية داخل مجلد public. */
  image?: string;
}

export const categories: {
  id: CategoryId;
  name: string;
  short: string;
  description: string;
}[] = [
  {
    id: "food-agency",
    name: "وكالات غذائية",
    short: "وكالات",
    description: "مواد أساسية تُطلب باستمرار من البقالات والموزعين.",
  },
  {
    id: "cosmetics",
    name: "تجميل وعناية",
    short: "تجميل",
    description: "صبغات ومرطبات ومنتجات عناية مناسبة للصالونات ومحال التجزئة.",
  },
  {
    id: "food",
    name: "مواد غذائية",
    short: "غذائي",
    description: "عصائر وسكاكر ومعلبات بتغليف جملة جاهز للرف.",
  },
  {
    id: "cleaning",
    name: "مواد التنظيف",
    short: "تنظيف",
    description: "منظفات وأدوات تنظيف للمنازل والمحال والمنشآت.",
  },
];

export const products: Product[] = [
  {
    id: "sunflower-oil-5l",
    sku: "BB-AG-101",
    name: "زيت دوار الشمس",
    description:
      "عبوات 5 لتر للمطاعم والبقالات. توريد جملة بثبات موسمي وتغليف يتحمل النقل.",
    category: "food-agency",
    unit: "كرتون 4×5 لتر",
    featured: true,
    icon: "droplets",
  },
  {
    id: "basmati-rice-10kg",
    sku: "BB-AG-102",
    name: "أرز بسمتي طويل الحبة",
    description:
      "أكياس 10 كغ بحبة طويلة مناسبة للمطاعم وأسواق التجزئة. متوفر للتوريد المتكرر.",
    category: "food-agency",
    unit: "كيس 10 كغ",
    featured: true,
    icon: "wheat",
  },
  {
    id: "white-sugar-50kg",
    sku: "BB-AG-103",
    name: "سكر أبيض ناعم",
    description:
      "أكياس 50 كغ للأفران والمعامل والمتاجر الكبيرة. يُسعَّر حسب حجم الدفعة.",
    category: "food-agency",
    unit: "كيس 50 كغ",
    featured: false,
    icon: "package",
  },
  {
    id: "milk-powder-25kg",
    sku: "BB-AG-104",
    name: "حليب مجفف كامل الدسم",
    description:
      "أكياس 25 كغ للمعامل والحلويات والمطابخ المركزية. تخزين جاف وبعيداً عن الرطوبة.",
    category: "food-agency",
    unit: "كيس 25 كغ",
    featured: true,
    icon: "shopping-basket",
  },
  {
    id: "hair-color-kit",
    sku: "BB-CS-201",
    name: "صبغة شعر احترافية",
    description:
      "مجموعة ألوان للصالونات ونقاط البيع. كرتون متنوع يمكن طلبه حسب الدرجات الأكثر مبيعاً.",
    category: "cosmetics",
    unit: "كرتون ألوان متنوعة",
    featured: true,
    icon: "palette",
  },
  {
    id: "body-lotion-500",
    sku: "BB-CS-202",
    name: "كريم ترطيب الجسم",
    description:
      "عبوات 500 مل بملمس خفيف. مناسبة لرف العناية اليومية وتُطلب بالجملة للمحال.",
    category: "cosmetics",
    unit: "كرتون 12×500 مل",
    featured: true,
    icon: "sparkles",
  },
  {
    id: "daily-shampoo-1l",
    sku: "BB-CS-203",
    name: "شامبو العناية اليومية",
    description:
      "عبوات لتر واحد للاستخدام المنزلي والصالونات. رائحة ثابتة وتغليف واضح على الرف.",
    category: "cosmetics",
    unit: "كرتون 12×1 لتر",
    featured: false,
    icon: "droplets",
  },
  {
    id: "glycerin-hand-cream",
    sku: "BB-CS-204",
    name: "كريم اليدين بالجلسرين",
    description:
      "عبوات صغيرة سريعة الدوران بجانب صندوق المحاسبة. تُباع بالكرتون لمحال العناية.",
    category: "cosmetics",
    unit: "كرتون 24 عبوة",
    featured: false,
    icon: "brush",
  },
  {
    id: "orange-juice-1l",
    sku: "BB-FD-301",
    name: "عصير برتقال",
    description:
      "عبوات 1 لتر داخل كرتون 12 قطعة. خيار جاهز للبقالات والثلاجات العرض.",
    category: "food",
    unit: "كرتون 12×1 لتر",
    featured: true,
    icon: "cup-soda",
  },
  {
    id: "assorted-candies",
    sku: "BB-FD-302",
    name: "تشكيلة سكاكر مغلفة",
    description:
      "سكاكر مغلفة فردياً بخلطة متنوعة. كرتون مناسب لواجهات البيع ونقاط المدرسة.",
    category: "food",
    unit: "كرتون مشكل",
    featured: true,
    icon: "cookie",
  },
  {
    id: "tuna-in-oil",
    sku: "BB-FD-303",
    name: "تونة معلبة بزيت نباتي",
    description:
      "علب قياسية داخل كرتون 48 قطعة. صنف دائم الطلب للمطاعم والأسواق.",
    category: "food",
    unit: "كرتون 48 علبة",
    featured: false,
    icon: "fish",
  },
  {
    id: "tomato-paste",
    sku: "BB-FD-304",
    name: "معجون طماطم",
    description:
      "علب معجون للمطابخ والبقالات. كرتون 24 قطعة مع تاريخ صلاحية واضح على الوجبة.",
    category: "food",
    unit: "كرتون 24 علبة",
    featured: false,
    icon: "apple",
  },
  {
    id: "lemon-dishwash-5l",
    sku: "BB-CL-401",
    name: "سائل جلي مركز بالليمون",
    description:
      "جالون 5 لتر مركز للمطاعم والمنازل. يُخفف حسب الاستخدام ويُشحن بكراتين من 4 عبوات.",
    category: "cleaning",
    unit: "كرتون 4×5 لتر",
    featured: true,
    icon: "spray",
  },
  {
    id: "laundry-powder-10kg",
    sku: "BB-CL-402",
    name: "مسحوق غسيل آلي",
    description:
      "أكياس 10 كغ للغسالات الآلية. خيار جملة للعائلات ومحال المنظفات.",
    category: "cleaning",
    unit: "كيس 10 كغ",
    featured: false,
    icon: "boxes",
  },
  {
    id: "laundry-bleach",
    sku: "BB-CL-403",
    name: "مبيض ملابس",
    description:
      "عبوات لتر واحد داخل كرتون. يُحفظ مغلقاً وبعيداً عن أشعة الشمس أثناء التخزين.",
    category: "cleaning",
    unit: "كرتون 12×1 لتر",
    featured: false,
    icon: "droplets",
  },
  {
    id: "cleaning-tool-set",
    sku: "BB-CL-404",
    name: "طقم أدوات تنظيف",
    description:
      "ممسحة ودلو وقطع مرافقة بنقطة سعر واضحة. يُطلب بالجملة لمحال الأدوات والمنزلية.",
    category: "cleaning",
    unit: "طقم بالجملة",
    featured: false,
    icon: "brush",
  },
];

export function isCategoryId(value: string | undefined): value is CategoryId {
  return !!value && (categoryIds as readonly string[]).includes(value);
}

export function getCategory(id: CategoryId) {
  return categories.find((category) => category.id === id)!;
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

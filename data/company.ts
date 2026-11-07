/**
 * بيانات شركة برج بابل.
 * حدّث الهاتف والبريد وروابط التواصل من هذا الملف فقط.
 */

export const company = {
  nameAr: "برج بابل",
  nameEn: "Burj Babel",
  /** يُستخدم في روابط الميتا وخريطة الموقع. استبدله بنطاق الشركة عند الإطلاق. */
  siteUrl: "https://burjbabel.com",
  tagline: "شريكك الموثوق في التجارة بالجملة",
  activity: "تجارة بالجملة",
  city: "الحلة",
  governorate: "بابل",
  country: "العراق",
  address: "الحلة، محافظة بابل، العراق",
  /** رقم عراقي بصيغة دولية بدون فراغات، يُستخدم في روابط الاتصال وواتساب. */
  phoneE164: "+9647800000000",
  phoneDisplay: "0780 000 0000",
  email: "info@burjbabel.com",
  hours: "السبت – الخميس: 9:00 صباحاً – 5:00 مساءً",
  closed: "الجمعة: مغلق",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=%D8%A7%D9%84%D8%AD%D9%84%D8%A9%20%D8%A8%D8%A7%D8%A8%D9%84%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82&hl=ar&z=13&output=embed",
  socials: [
    {
      id: "facebook",
      label: "فيسبوك",
      href: "https://www.facebook.com/burjbabel",
    },
    {
      id: "instagram",
      label: "إنستغرام",
      href: "https://www.instagram.com/burjbabel",
    },
  ],
  /**
   * أرقام تعريفية للعرض. عدّلها عندما تتوفر أرقام التشغيل الفعلية.
   */
  stats: [
    { value: "+15", label: "سنة خبرة في سوق الجملة" },
    { value: "+500", label: "تاجر وموزع نتعامل معهم" },
    { value: "+1200", label: "صنف متوفر للتوريد" },
    { value: "4", label: "قطاعات توريد متخصصة" },
  ],
} as const;

export const specialties = [
  {
    id: "food-agency",
    title: "الوكالات الغذائية",
    description:
      "توريد الوكالات والمواد الأساسية للمتاجر والموزعين: زيوت، حبوب، سكر، وألبان جافة بكميات الجملة.",
    href: "/products?category=food-agency",
  },
  {
    id: "cosmetics",
    title: "مستحضرات التجميل والعناية",
    description:
      "صبغات شعر، مرطبات، شامبو، ومنتجات عناية يومية جاهزة لإعادة البيع في الصالونات والمحال.",
    href: "/products?category=cosmetics",
  },
  {
    id: "food",
    title: "المواد الغذائية",
    description:
      "عصائر، سكاكر، معلبات، ومعجون بمواصفات تخزين واضحة وتغليف يناسب رف البيع بالجملة.",
    href: "/products?category=food",
  },
  {
    id: "cleaning",
    title: "مواد وأدوات التنظيف",
    description:
      "سوائل جلي، مساحيق غسيل، مبيضات، وأدوات تنظيف للمنازل والمنشآت ومحال التجزئة.",
    href: "/products?category=cleaning",
  },
] as const;

export const reasons = [
  {
    id: "price",
    title: "أسعار الجملة",
    description: "تسعير واضح حسب الكمية، بهامش يترك للتاجر مساحة إعادة بيع مريحة.",
  },
  {
    id: "quality",
    title: "جودة مضمونة",
    description: "نختار أصنافاً ثابتة التوفر، صالحة للتخزين، ومناسبة للطلب المتكرر.",
  },
  {
    id: "delivery",
    title: "توريد منظم",
    description: "تجهيز وتسليم داخل الحلة ومحافظة بابل، وإلى المحافظات حسب الاتفاق.",
  },
  {
    id: "experience",
    title: "خبرة في السوق",
    description: "نعرف مواسم الطلب في بابل، ونرتب التشكيلة بما يتحرك فعلياً على الرف.",
  },
] as const;

export const values = [
  {
    title: "الأمانة",
    description: "الصنف والوزن والتغليف كما اتفقنا، من غير مفاجآت عند التسليم.",
  },
  {
    title: "الالتزام",
    description: "موعد التجهيز جزء من الصفقة، ونبلغك مبكراً إذا تغيّر التوفر.",
  },
  {
    title: "الوضوح",
    description: "السعر والحد الأدنى والكمية تُثبت قبل التحميل، لا بعده.",
  },
  {
    title: "الاستمرار",
    description: "نبني علاقة توريد طويلة مع المحل والموزع، لا صفقة عابرة.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "ترسل قائمتك",
    description: "اختر من التشكيلة أو أرسل أصنافك والكميات التقريبية.",
  },
  {
    number: "02",
    title: "نثبت العرض",
    description: "نعود إليك بالسعر المتاح والكمية وموعد التجهيز.",
  },
  {
    number: "03",
    title: "نجهّز ونسلّم",
    description: "تُحضَّر البضاعة للتسليم في الحلة أو للشحن حسب الاتفاق.",
  },
] as const;

/** شعارات توضيحية تُستبدل لاحقاً بشعارات الوكالات المعتمدة. */
export const partners = [
  { name: "نهر الفرات", sector: "أغذية" },
  { name: "لمسة", sector: "عناية" },
  { name: "سلة الحلة", sector: "توزيع" },
  { name: "نقاء", sector: "تنظيف" },
  { name: "سنبلة", sector: "حبوب" },
  { name: "ذهب بابل", sector: "وكالات" },
] as const;

export const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/products", label: "المنتجات" },
  { href: "/contact", label: "اتصل بنا" },
] as const;

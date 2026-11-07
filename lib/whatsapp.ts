import { company } from "@/data/company";

/** يبني رابط واتساب برقم الشركة مع نص جاهز. */
export function buildWhatsAppLink(message?: string) {
  const phone = company.phoneE164.replace(/\D/g, "");
  const base = `https://wa.me/${phone}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function productInquiryMessage(product: { name: string; sku: string }) {
  return `السلام عليكم، أرغب بعرض سعر بالجملة للمنتج: ${product.name} (الرمز: ${product.sku}).\nالكمية التقريبية:\n`;
}

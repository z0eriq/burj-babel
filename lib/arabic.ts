/** صياغة عربية لعدد المنتجات المعروضة. */
export function formatProductCount(count: number) {
  if (count === 0) return "لا توجد منتجات مطابقة";
  if (count === 1) return "منتج واحد";
  if (count === 2) return "منتجان";
  if (count >= 3 && count <= 10) return `${count} منتجات`;
  return `${count} منتجاً`;
}

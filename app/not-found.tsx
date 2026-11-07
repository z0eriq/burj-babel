import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center">
      <p className="text-sm font-extrabold text-amber-800">404</p>
      <h1 className="mt-3 text-4xl font-extrabold text-brand-navy">الصفحة غير موجودة</h1>
      <p className="mx-auto mt-4 max-w-md leading-8 text-slate-600">
        الرابط الذي طلبته غير متاح. عد إلى الرئيسية أو تصفح تشكيلة الجملة.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">الرئيسية</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/products">المنتجات</Link>
        </Button>
      </div>
    </section>
  );
}

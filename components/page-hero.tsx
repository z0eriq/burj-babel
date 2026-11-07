import Link from "next/link";
import { ChevronLeft } from "lucide-react";

/** ترويسة الصفحات الداخلية مع مسار تنقل. */
export function PageHero({
  title,
  description,
  current,
}: {
  title: string;
  description: string;
  current: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="babel-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="absolute -top-24 start-1/3 h-64 w-64 rounded-full bg-brand-gold/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative py-14 md:py-16">
        <nav aria-label="مسار التنقل">
          <ol className="flex items-center gap-2 text-sm text-blue-100">
            <li>
              <Link href="/" className="font-semibold hover:text-white">
                الرئيسية
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronLeft className="h-4 w-4" />
            </li>
            <li aria-current="page" className="font-bold text-white">
              {current}
            </li>
          </ol>
        </nav>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">{description}</p>
      </div>
    </section>
  );
}

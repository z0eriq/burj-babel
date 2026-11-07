"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { company, navLinks } from "@/data/company";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** الشريط العلوي والقائمة الثابتة، مع قائمة كاملة للجوال. */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="sticky top-0 z-50">
      <div className="hidden bg-brand-navy text-sm text-blue-100 sm:block">
        <div className="container-page flex items-center justify-between gap-4 py-2">
          <p>
            {company.city} · محافظة {company.governorate} · {company.country}
          </p>
          <a href={`tel:${company.phoneE164}`} className="inline-flex items-center gap-2 font-bold text-white">
            <Phone className="h-4 w-4 text-brand-gold" aria-hidden="true" />
            <span dir="ltr">{company.phoneDisplay}</span>
          </a>
        </div>
      </div>

      <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-3">
          <Logo />

          <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-bold text-slate-700 transition-colors hover:text-brand-navy",
                    active &&
                      "text-brand-navy after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-brand-gold",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden md:inline-flex">
              <Link href="/contact">اطلب عرض سعر</Link>
            </Button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-brand-navy lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "إغلاق القائمة" : "فتح القائمة"}</span>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <nav id="mobile-nav" aria-label="تنقل الجوال" className="border-t border-slate-200 bg-white lg:hidden">
            <div className="container-page flex flex-col gap-1 py-3">
              {navLinks.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-xl px-3 py-3 text-base font-bold text-slate-800 hover:bg-slate-50",
                      active && "bg-amber-50 text-brand-navy",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button asChild className="mt-2">
                <Link href="/contact">اطلب عرض سعر</Link>
              </Button>
            </div>
          </nav>
        ) : null}
      </header>
    </div>
  );
}

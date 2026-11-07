"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { validateQuickContact } from "@/lib/validators";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/** تواصل سريع: بيانات الشركة ونموذج قصير يفتح واتساب. */
export function QuickContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [fallbackUrl, setFallbackUrl] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validateQuickContact(name, phone);
    if (!result.ok) {
      setErrors(result.errors);
      setFallbackUrl("");
      return;
    }

    setErrors({});
    const url = buildWhatsAppLink(
      `السلام عليكم، أنا ${result.name}. أرغب بالتواصل مع مبيعات برج بابل.\nهاتفي: ${result.phone}`,
    );
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    setFallbackUrl(opened ? "" : url);
  }

  return (
    <section className="bg-brand-navy py-16 text-white md:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-extrabold md:text-4xl">تواصل سريع مع المبيعات</h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-blue-100">
            أرسل اسمك ورقم هاتفك، أو انتقل إلى نموذج الطلب الكامل إذا كانت لديك قائمة أصناف.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-gold" aria-hidden="true" />
              {company.address}
            </li>
            <li>
              <a className="inline-flex items-center gap-2 font-bold" href={`tel:${company.phoneE164}`}>
                <Phone className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                <span dir="ltr">{company.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2" href={`mailto:${company.email}`}>
                <Mail className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                <span dir="ltr">{company.email}</span>
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-white p-6 text-slate-900 shadow-card md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="quick-name" className="mb-2 block text-sm font-bold">
                الاسم
              </label>
              <Input
                id="quick-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name ? <p className="mt-2 text-sm font-semibold text-red-700">{errors.name}</p> : null}
            </div>
            <div>
              <label htmlFor="quick-phone" className="mb-2 block text-sm font-bold">
                الهاتف
              </label>
              <Input
                id="quick-phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                type="tel"
                dir="ltr"
                className="text-start"
                placeholder="07xxxxxxxxx"
                autoComplete="tel"
                aria-invalid={Boolean(errors.phone)}
              />
              {errors.phone ? <p className="mt-2 text-sm font-semibold text-red-700">{errors.phone}</p> : null}
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button type="submit" variant="gold">
              راسلنا على واتساب
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">النموذج الكامل</Link>
            </Button>
          </div>
          {fallbackUrl ? (
            <a href={fallbackUrl} target="_blank" rel="noopener noreferrer" className="mt-4 block text-sm font-bold text-brand-navy">
              إذا لم تُفتح النافذة، اضغط هنا لإكمال الإرسال
            </a>
          ) : null}
        </form>
      </div>
    </section>
  );
}

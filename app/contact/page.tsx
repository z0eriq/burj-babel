import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SocialLinks } from "@/components/social-links";
import { company } from "@/data/company";
import { getProductById } from "@/data/products";
import { productInquiryMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "اتصل بنا",
  description:
    "تواصل مع مبيعات برج بابل في الحلة، محافظة بابل. هاتف، بريد، ونموذج طلب عرض سعر بالجملة.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "اتصل بنا | برج بابل",
    description: "تواصل مع مبيعات برج بابل في الحلة لطلب عرض سعر بالجملة.",
    url: "/contact",
  },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { product?: string };
}) {
  const product =
    typeof searchParams.product === "string" ? getProductById(searchParams.product) : undefined;

  return (
    <>
      <PageHero
        current="اتصل بنا"
        title="اطلب عرض السعر"
        description="أرسل بياناتك وقائمة الكميات. نراجع الطلب ونعود إليك بالسعر المتاح وموعد التجهيز."
      />

      <section className="py-12 md:py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-extrabold text-brand-navy">نموذج التواصل</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              الحقول مطلوبة. بعد التحقق تفتح رسالة واتساب جاهزة حتى يصل الطلب إلى المبيعات.
            </p>
            <div className="mt-6">
              <ContactForm
                productLabel={product ? `${product.name} (${product.sku})` : undefined}
                initialMessage={product ? productInquiryMessage(product) : ""}
              />
            </div>
          </div>

          <div className="space-y-5">
            <address className="not-italic rounded-3xl bg-brand-navy p-6 text-white md:p-8">
              <h2 className="text-2xl font-extrabold">معلومات الاتصال</h2>
              <ul className="mt-5 space-y-4 text-sm leading-7">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" />
                  <span>{company.address}</span>
                </li>
                <li>
                  <a className="flex items-center gap-3 font-bold" href={`tel:${company.phoneE164}`}>
                    <Phone className="h-5 w-5 text-brand-gold" aria-hidden="true" />
                    <span dir="ltr">{company.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-3" href={`mailto:${company.email}`}>
                    <Mail className="h-5 w-5 text-brand-gold" aria-hidden="true" />
                    <span dir="ltr">{company.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock3 className="mt-1 h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" />
                  <span>
                    {company.hours}
                    <br />
                    {company.closed}
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <p className="mb-3 text-sm font-bold text-amber-200">وسائل التواصل</p>
                <SocialLinks />
              </div>
            </address>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <iframe
                title="موقع برج بابل على الخريطة — الحلة، بابل، العراق"
                src={company.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

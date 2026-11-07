import { company } from "@/data/company";

/** بيانات منظمة لمحركات البحث عن نشاط الجملة في الحلة. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    name: company.nameAr,
    alternateName: company.nameEn,
    description: `${company.nameAr} شركة تجارة بالجملة في ${company.address}.`,
    url: company.siteUrl,
    telephone: company.phoneE164,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: company.city,
      addressRegion: company.governorate,
      addressCountry: "IQ",
    },
    areaServed: {
      "@type": "Country",
      name: "العراق",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "17:00",
    },
    sameAs: company.socials.map((item) => item.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cairo } from "next/font/google";
import { BackToTop } from "@/components/back-to-top";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { company } from "@/data/company";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-cairo",
});

const description =
  "برج بابل شركة تجارة بالجملة في الحلة، محافظة بابل، العراق. وكالات غذائية، مستحضرات تجميل وعناية، مواد غذائية، ومواد وأدوات تنظيف للتجار والموزعين.";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "برج بابل | تجارة الجملة في الحلة",
    template: "%s | برج بابل",
  },
  description,
  keywords: [
    "برج بابل",
    "Burj Babel",
    "تجارة الجملة",
    "الحلة",
    "محافظة بابل",
    "وكالات غذائية",
    "مستحضرات تجميل بالجملة",
    "مواد تنظيف بالجملة",
    "العراق",
  ],
  applicationName: company.nameAr,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_IQ",
    url: company.siteUrl,
    siteName: company.nameAr,
    title: "برج بابل | تجارة الجملة في الحلة",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "برج بابل | تجارة الجملة في الحلة",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1E3A8A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className={`${cairo.className} min-h-screen bg-brand-canvas text-slate-900 antialiased`}>
        <JsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[70] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-brand-navy"
        >
          تخطي إلى المحتوى
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}

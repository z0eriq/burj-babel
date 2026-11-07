import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks, specialties } from "@/data/company";
import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";

/** تذييل الصفحات: تعريف، روابط، تخصصات، وبيانات التواصل. */
export function SiteFooter() {
  return (
    <footer className="bg-brand-deep text-blue-100">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="light" />
          <p className="mt-4 text-sm leading-7 text-blue-100/90">
            بيت تجاري للجملة من الحلة. نزوّد التجار والموزعين بالوكالات الغذائية، والعناية، والمواد
            الغذائية، ومواد التنظيف.
          </p>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-extrabold text-brand-gold">تصفح</h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-semibold hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-extrabold text-brand-gold">التخصصات</h2>
          <ul className="mt-4 space-y-2">
            {specialties.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="text-sm font-semibold hover:text-white">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-extrabold text-brand-gold">التواصل</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
              <span>{company.address}</span>
            </li>
            <li>
              <a href={`tel:${company.phoneE164}`} className="flex items-center gap-2 font-bold hover:text-white">
                <Phone className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                <span dir="ltr">{company.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                <span dir="ltr">{company.email}</span>
              </a>
            </li>
            <li className="leading-7">
              {company.hours}
              <br />
              {company.closed}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs leading-6 text-blue-100/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} برج بابل. جميع الحقوق محفوظة.</p>
          <p>أسعار الجملة تُحدد حسب الكمية وتوافر المخزون.</p>
        </div>
      </div>
    </footer>
  );
}

import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
      <path d="M14.2 8.5H17V5h-2.8C11.6 5 10 6.7 10 9.2V11H8v3h2v7h3v-7h2.4l.6-3H13V9.3c0-.5.4-.8 1.2-.8z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const icons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
} as const;

/** روابط الشبكات. واتساب يُبنى من رقم الشركة. */
export function SocialLinks({ tone = "light" }: { tone?: "light" | "dark" }) {
  const itemClass = cn(
    "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors",
    tone === "light"
      ? "border-white/25 bg-white/10 text-white hover:bg-brand-gold hover:text-brand-deep"
      : "border-slate-200 bg-white text-brand-navy hover:border-brand-gold hover:bg-amber-50",
  );

  return (
    <ul className="flex flex-wrap gap-2">
      {company.socials.map((item) => {
        const Icon = icons[item.id];
        return (
          <li key={item.id}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.label} — يفتح في تبويب جديد`}
              className={itemClass}
            >
              <Icon />
            </a>
          </li>
        );
      })}
      <li>
        <a
          href={buildWhatsAppLink("السلام عليكم، أرغب بالاستفسار عن أسعار الجملة لدى برج بابل.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="واتساب — يفتح في تبويب جديد"
          className={itemClass}
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </li>
    </ul>
  );
}

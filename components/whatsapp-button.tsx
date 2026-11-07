import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/** زر واتساب عائم في زاوية الشاشة. */
export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink("السلام عليكم، أرغب بالاستفسار عن أسعار الجملة لدى برج بابل.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-5 left-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-900/25 transition hover:bg-[#1ebe5d]"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

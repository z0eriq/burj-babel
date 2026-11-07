"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** يظهر بعد النزول في الصفحة ويعيد الزائر إلى الأعلى. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-[5.75rem] left-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg transition hover:bg-[#2547a8]"
      aria-label="العودة إلى الأعلى"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

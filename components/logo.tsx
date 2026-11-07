import Link from "next/link";
import { cn } from "@/lib/utils";

/** علامة البرج المدرّج: مربعات تصعد نحو القمة. */
export function BabelMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#1E3A8A" />
      <path
        fill="#F59E0B"
        d="M8 50h48v7H8zM12 41h40v7H12zM17 32h30v7H17zM22 23h20v7H22zM27 13h10v8H27z"
      />
      <rect x="29" y="42" width="6" height="15" fill="#0B1F4D" />
    </svg>
  );
}

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5 rounded-xl", className)}
      aria-label="برج بابل — الصفحة الرئيسية"
    >
      <BabelMark className="h-11 w-11 shrink-0" />
      <span className="flex flex-col">
        <span
          className={cn(
            "text-lg font-extrabold leading-none",
            tone === "light" ? "text-white" : "text-brand-navy",
          )}
        >
          برج بابل
        </span>
        <span className="mt-1 text-[11px] font-bold tracking-[0.18em] text-brand-gold">BURJ BABEL</span>
      </span>
    </Link>
  );
}

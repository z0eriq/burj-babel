import { cn } from "@/lib/utils";

/** عنوان قسم موحّد: سطر تعريفي، عنوان، وخط ذهبي. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="text-sm font-bold text-amber-800">{eyebrow}</p> : null}
      <h2
        className={cn(
          "mt-2 text-3xl font-extrabold leading-tight md:text-4xl",
          light ? "text-white" : "text-brand-navy",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-3 text-base leading-8", light ? "text-blue-100" : "text-slate-600")}>
          {description}
        </p>
      ) : null}
      <span
        className={cn(
          "mt-4 block h-1 w-16 rounded-full bg-brand-gold",
          align === "center" && "mx-auto",
        )}
        aria-hidden="true"
      />
    </div>
  );
}

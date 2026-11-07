import { company } from "@/data/company";
import { cn } from "@/lib/utils";

/** أرقام التعريف نفسها في الرئيسية وصفحة من نحن. */
export function StatsGrid({ className }: { className?: string }) {
  return (
    <ul className={cn("grid grid-cols-2 gap-3 lg:grid-cols-4", className)}>
      {company.stats.map((stat) => (
        <li key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <p className="text-3xl font-extrabold text-brand-navy" dir="ltr">
            {stat.value}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
        </li>
      ))}
    </ul>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";

/** حقل نص بارتفاع مريح للمس وخط 16px حتى لا تقرّب الجوالات الصفحة عند التركيز. */
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-900 shadow-sm transition placeholder:text-slate-400 focus-visible:border-brand-navy disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };

import * as React from "react";
import { cn } from "@/lib/utils";

/** شارة صغيرة لاسم الفئة أو وسم «مميز». */
export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-950",
        className,
      )}
      {...props}
    />
  );
}

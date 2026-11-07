import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** دمج أصناف Tailwind بدون تعارض، بالأسلوب المعتمد في shadcn/ui. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

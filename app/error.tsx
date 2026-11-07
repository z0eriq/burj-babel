"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="container-page py-24 text-center">
      <h1 className="text-3xl font-extrabold text-brand-navy">حدث خطأ غير متوقع</h1>
      <p className="mx-auto mt-3 max-w-md leading-8 text-slate-600">
        تعذر عرض هذه الصفحة. أعد المحاولة، وإذا استمر العطل حدّث النافذة.
      </p>
      <Button type="button" className="mt-6" onClick={() => reset()}>
        إعادة المحاولة
      </Button>
    </section>
  );
}

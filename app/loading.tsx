export default function Loading() {
  return (
    <div className="container-page py-16" aria-busy="true" aria-live="polite">
      <div className="h-8 w-48 animate-pulse rounded-lg bg-slate-200" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-64 animate-pulse rounded-2xl bg-slate-200" />
        ))}
      </div>
    </div>
  );
}

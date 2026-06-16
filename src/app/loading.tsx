export default function Loading() {
  return (
    <div className="min-h-screen paper-texture flex flex-col">
      {/* Skeleton Masthead */}
      <div className="border-b-4 border-ink py-4 px-4 md:px-8">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="h-4 w-24 bg-ink/10 animate-pulse rounded" />
            <div className="h-10 w-56 bg-ink/10 animate-pulse rounded" />
            <div className="h-4 w-24 bg-ink/10 animate-pulse rounded" />
          </div>
          <div className="h-16 w-full bg-ink/5 animate-pulse rounded mt-4" />
          <div className="flex gap-6 mt-4 justify-center">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="h-3 w-14 bg-ink/10 animate-pulse rounded" />
            ))}
          </div>
        </div>
      </div>

      {/* Skeleton Pulse Bar */}
      <div className="bg-ink/5 h-8 animate-pulse" />

      {/* Skeleton Hero */}
      <main className="mx-auto max-w-screen-xl px-4 py-8 md:px-8 w-full">
        <div className="grid grid-cols-12 gap-8 mb-8">
          <div className="col-span-12 lg:col-span-8">
            <div className="h-[50vh] bg-ink/10 animate-pulse rounded mb-6" />
            <div className="h-16 bg-ink/10 animate-pulse rounded mb-4 w-3/4" />
            <div className="h-6 bg-ink/5 animate-pulse rounded mb-2" />
            <div className="h-6 bg-ink/5 animate-pulse rounded mb-2 w-2/3" />
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="border-b border-border pb-4">
                <div className="h-3 w-16 bg-ink/10 animate-pulse rounded mb-2" />
                <div className="h-5 bg-ink/10 animate-pulse rounded mb-2" />
                <div className="h-5 bg-ink/5 animate-pulse rounded w-3/4" />
              </div>
            ))}
          </div>
        </div>

        <div className="border-t-2 border-ink pt-8">
          <div className="h-4 w-48 bg-ink/10 animate-pulse rounded mx-auto mb-8" />
          <div className="grid grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="aspect-[3/2] bg-ink/10 animate-pulse rounded" />
                <div className="h-4 bg-ink/10 animate-pulse rounded" />
                <div className="h-4 bg-ink/5 animate-pulse rounded w-4/5" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

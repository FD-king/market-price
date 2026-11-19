const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse rounded-md bg-[#E3EBE4] ${className}`} />
);

// 1. Navbar Skeleton
export const NavbarSkeleton = () => {
  return (
    <div className="w-full border-b border-[#E6ECE6] bg-[#FCFDFB]">
      {/* Main Navbar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10 rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-2.5 w-28" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-20 rounded-lg" />
          <Skeleton className="h-9 w-9 rounded-full" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden border-t border-[#EEF2EE] sm:block">
        <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-3">
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton key={i} className="h-3 w-12" />
          ))}
        </div>
      </div>

      {/* Price Ticker */}
      <div className="flex gap-5 overflow-hidden border-t border-[#EEF2EE] px-4 py-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-3 w-36 shrink-0" />
        ))}
      </div>
    </div>
  );
};

// 2. Hero Skeleton
export const HeroSkeleton = () => {
  return (
    <section className="w-full bg-[#F0F5F0] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <Skeleton className="h-7 w-40 rounded-full" />

          <div className="w-full space-y-3">
            <Skeleton className="mx-auto h-9 w-3/4 sm:h-12" />
            <Skeleton className="mx-auto h-9 w-2/3 sm:h-12" />
          </div>

          <div className="w-full space-y-2">
            <Skeleton className="mx-auto h-4 w-4/5" />
            <Skeleton className="mx-auto h-4 w-2/3" />
          </div>

          {/* Search Bar */}
          <div className="flex w-full max-w-xl gap-2 rounded-xl border border-[#DCE6DD] bg-[#FAFCFA] p-2">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-24 rounded-lg" />
          </div>

          <div className="flex justify-center gap-3">
            <Skeleton className="h-10 w-28 rounded-lg" />
            <Skeleton className="h-10 w-28 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. Main Body Skeleton
export const MainBodySkeleton = () => {
  return (
    <section className="bg-[#F0F5F0] px-4 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Section Heading */}
        <div className="space-y-3">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-4 w-64 max-w-full" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-24 rounded-lg" />
          ))}
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#DCE6DD] bg-[#FAFCFA] p-4"
            >
              <Skeleton className="mb-4 h-36 w-full rounded-lg" />
              <Skeleton className="mb-3 h-5 w-3/4" />
              <Skeleton className="mb-4 h-4 w-1/2" />
              <Skeleton className="h-9 w-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Profile Skeleton
export const ProfileSkeleton = () => {
  return (
    <section className="bg-[#F0F5F0] px-4 py-10 sm:py-12">
      <div className="mx-auto max-w-[490px]">
        {/* Heading */}
        <div className="mb-5 space-y-2">
          <Skeleton className="h-7 w-40" />
          <Skeleton className="h-4 w-56 max-w-full" />
        </div>

        {/* User Information Card */}
        <div className="mb-4 flex items-center justify-between gap-3 rounded-xl border border-[#DCE6DD] bg-[#FAFCFA] p-4">
          <div className="flex min-w-0 items-center gap-3">
            <Skeleton className="h-12 w-12 shrink-0 rounded-xl" />

            <div className="space-y-2">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-3 w-36 max-w-full" />
            </div>
          </div>

          <Skeleton className="h-8 w-20 shrink-0 rounded-md" />
        </div>

        {/* Profile Form */}
        <div className="space-y-5 rounded-xl border border-[#DCE6DD] bg-[#FAFCFA] p-4 sm:p-5">
          <Skeleton className="h-5 w-16" />

          <div className="space-y-2">
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>

          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
};

// 5. Products Skeleton
export const ProductsSkeleton = () => {
  return (
    <section className="bg-[#F0F5F0] px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-6 space-y-2">
          <Skeleton className="h-7 w-44" />
          <Skeleton className="h-4 w-64 max-w-full" />
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
          <Skeleton className="h-11 flex-1 rounded-lg" />
          <Skeleton className="h-11 w-full rounded-lg sm:w-32" />
          <Skeleton className="h-11 w-full rounded-lg sm:w-32" />
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-[#DCE6DD] bg-[#FAFCFA] p-3"
            >
              <Skeleton className="aspect-square w-full rounded-lg" />

              <div className="mt-3 space-y-2">
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-3 w-1/2" />
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-9 w-full rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. Category Skeleton
export const CategorySkeleton = () => {
  return (
    <section className="bg-[#F0F5F0] px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-6 space-y-2">
          <Skeleton className="h-7 w-40" />
          <Skeleton className="h-4 w-56 max-w-full" />
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-[#DCE6DD] bg-[#FAFCFA] p-4"
            >
              <Skeleton className="h-12 w-12 shrink-0 rounded-lg" />

              <div className="min-w-0 flex-1 space-y-2">
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

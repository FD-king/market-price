import CategoryProductList from "@/app/components/CategoryProductList";
import IProduct from "@/types/AllProductsType";
import Link from "next/link";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryID: string }>;
}) => {
  const { categoryID } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryID}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category products");
  }

  const data: IProduct[] = await res.json();

  return (
    <main className="min-h-screen w-full bg-[#F0F5F0] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Category Heading */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                {data[0]?.categoryIcon ?? "🛒"}
              </span>

              <h1 className="text-2xl font-bold text-[#1D271F] sm:text-3xl">
                {data[0]?.categoryNameBn ?? categoryID}
              </h1>
            </div>

            <p className="text-sm text-[#657168]">
              মোট {data.length}টি পণ্য দেখানো হচ্ছে
            </p>
          </div>
        </div>

        {/* Sorting and Products */}
        {data.length > 0 ? (
          <CategoryProductList data={data} />
        ) : (
          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-[#DCE6DD] bg-white px-4 text-center">
            <span className="mb-4 text-5xl">🛒</span>

            <h2 className="mb-2 text-xl font-bold text-[#1D271F]">
              কোনো পণ্য পাওয়া যায়নি
            </h2>

            <p className="mb-5 text-sm text-[#657168]">
              এই ক্যাটাগরিতে বর্তমানে কোনো পণ্য নেই।
            </p>

            <Link
              href="/"
              className="rounded-xl bg-[#1D6B40] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#155532]"
            >
              হোম পেজে ফিরে যান
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default CategoryPage;

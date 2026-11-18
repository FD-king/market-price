import IProduct from "@/types/AllProductsType";
import AllProductsInMainSection from "./AllProductsInMainSection";
import PriceHighSection from "./PriceHighSection";
import PriceLowSection from "./PriceLowSection";

const MainProductSection = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: IProduct[] = await res.json();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
      {/* Price Increased */}
      <section className="flex w-full flex-col gap-4">
        <div className="flex items-center gap-2">
          <p className="flex shrink-0 items-center justify-center rounded-full bg-red-50 px-2 py-1 text-[10px] font-bold text-red-600">
            ▲
          </p>
          <h2 className="text-xl font-bold text-[#1D271F] sm:text-2xl">
            আজ দাম বেড়েছে
          </h2>
        </div>

        <PriceHighSection data={data} />
      </section>

      {/* Price Decreased */}
      <section className="flex w-full flex-col gap-4">
        <div className="flex items-center gap-2">
          <p className="flex shrink-0 items-center justify-center rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700">
            ▼
          </p>
          <h2 className="text-xl font-bold text-[#1D271F] sm:text-2xl">
            আজ দাম কমেছে
          </h2>
        </div>

        <PriceLowSection data={data} />
      </section>

      {/* All Products */}
      <section className="flex w-full flex-col gap-2">
        <h2 className="text-xl font-bold text-[#1D271F] sm:text-2xl">
          সব পণ্য
        </h2>

        <p className="text-sm text-[#1D271F]">
          {`মোট ${data.length}টি পণ্য দেখানো হচ্ছে`}
        </p>

        <div className="mt-2">
          <AllProductsInMainSection data={data} />
        </div>
      </section>
    </main>
  );
};

export default MainProductSection;

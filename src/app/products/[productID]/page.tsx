import Link from "next/link";
import IProduct from "@/types/AllProductsType";
import { notFound } from "next/navigation";

// Convert English digits to Bengali digits
const toBanglaDigits = (value: number | string): string => {
  const digits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  return String(value).replace(/\d/g, (digit) => digits[Number(digit)]);
};

// Format prices with up to 2 decimal places
const formatPriceValue = (num: number): string => {
  const fixed = Number(num.toFixed(2));
  const formatted = Number.isInteger(fixed)
    ? fixed.toString()
    : fixed.toFixed(2);

  return toBanglaDigits(formatted);
};

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productID: string }>;
}) => {
  const { productID } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${productID}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category products");
  }

  const data: IProduct = await res.json();
  if (!data) {
    notFound();
  }

  const diffFromYesterday = Number((data.today - data.yesterday).toFixed(2));
  const absDiffBn = formatPriceValue(Math.abs(diffFromYesterday));

  const minMarketPrice =
    data.markets.length > 0
      ? Math.min(...data.markets.map((market) => market.min))
      : data.today;

  const maxMarketPrice =
    data.markets.length > 0
      ? Math.max(...data.markets.map((market) => market.max))
      : data.today;

  const isUp = data.change?.dir === "up" || diffFromYesterday > 0;
  const isDown = data.change?.dir === "down" || diffFromYesterday < 0;

  const trendColorClass = isUp
    ? "text-[#DC2626]"
    : isDown
      ? "text-[#15803D]"
      : "text-[#52525B]";

  const trendSymbol = isUp ? "▲" : isDown ? "▼" : "—";
  const pctFormatted = toBanglaDigits(Number(data.change?.pct ?? 0).toFixed(1));

  return (
    <main className="min-h-screen bg-[#EEF2EE] px-4 py-6 text-[#18181B] sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-5">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 px-1 text-xs text-[#52525B] sm:text-[13px]"
        >
          <Link
            href="/"
            className="font-medium transition-colors hover:text-[#18181B]"
          >
            হোম
          </Link>

          <span className="text-[#A1A1AA]">›</span>

          <Link
            href={`/category/${data.category}`}
            className="font-medium transition-colors hover:text-[#18181B]"
          >
            {data.categoryNameBn}
          </Link>

          <span className="text-[#A1A1AA]">›</span>

          <span className="font-semibold text-[#18181B]">{data.nameBn}</span>
        </nav>

        {/* Product Header */}
        <section className="flex flex-col justify-between gap-5 rounded-2xl border border-[#E2E8E2] bg-[#F8FAF8] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] sm:flex-row sm:items-center sm:p-7">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#E4E8E4] bg-[#EEF1EE] p-2.5 sm:h-[74px] sm:w-[74px]">
              {data.categoryIcon}
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl leading-tight font-bold tracking-tight text-[#18181B] sm:text-[28px]">
                {data.nameBn}
              </h1>

              <p className="text-xs font-medium text-[#71717A] sm:text-sm">
                প্রতি {data.unit} · {data.categoryNameBn}
              </p>

              <p className="pt-0.5 text-xs text-[#3F3F46] sm:text-[13px]">
                {diffFromYesterday > 0 ? (
                  <>
                    গতকালের তুলনায় আজ দাম{" "}
                    <strong className="font-bold text-[#18181B]">বেড়েছে</strong>{" "}
                    · {absDiffBn} টাকা
                  </>
                ) : diffFromYesterday < 0 ? (
                  <>
                    গতকালের তুলনায় আজ দাম{" "}
                    <strong className="font-bold text-[#18181B]">কমেছে</strong>{" "}
                    · {absDiffBn} টাকা
                  </>
                ) : (
                  <>গতকালের তুলনায় আজ দাম অপরিবর্তিত রয়েছে</>
                )}
              </p>
            </div>
          </div>

          {/* Today's Price */}
          <div className="flex items-center justify-between rounded-2xl border border-[#E3E7E3] bg-[#EEF1EE] px-6 py-3.5 text-center sm:min-w-[138px] sm:flex-col sm:justify-center sm:py-4">
            <span className="text-[11px] font-medium text-[#71717A] sm:text-xs">
              আজকের দাম
            </span>

            <div className="flex items-baseline gap-2 sm:flex-col sm:items-center sm:gap-0.5">
              <span className="text-2xl leading-none font-extrabold text-[#18181B] sm:my-1 sm:text-[30px]">
                {formatPriceValue(data.today)}
              </span>

              <span className="text-[11px] font-medium text-[#52525B] sm:text-xs">
                টাকা / {data.unit}
              </span>
            </div>

            <div
              className={`flex items-center gap-1 text-xs font-bold sm:mt-1.5 ${trendColorClass}`}
            >
              <span className="text-[10px]">{trendSymbol}</span>
              <span>{pctFormatted}%</span>
            </div>
          </div>
        </section>

        {/* Price Summary and Market Prices */}
        <section className="space-y-7 rounded-2xl border border-[#E2E8E2] bg-[#F8FAF8] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] sm:p-7">
          {/* Price Summary */}
          <div className="space-y-3.5">
            <h2 className="text-base font-bold text-[#18181B] sm:text-[17px]">
              দামের সারসংক্ষেপ
            </h2>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
              {/* Lowest Price */}
              <div className="space-y-1 rounded-xl border border-[#E5EAE5] bg-[#F9FBF9] p-4 sm:px-5 sm:py-4">
                <p className="text-xs font-medium text-[#71717A]">
                  সর্বনিম্ন দাম
                </p>

                <p className="text-xl leading-snug font-extrabold text-[#15803D] sm:text-[22px]">
                  {formatPriceValue(minMarketPrice)}{" "}
                  <span className="text-xs font-semibold sm:text-sm">টাকা</span>
                </p>

                <p className="text-[11px] text-[#71717A]">
                  সবচেয়ে কম দামের বাজার
                </p>
              </div>

              {/* Highest Price */}
              <div className="space-y-1 rounded-xl border border-[#E5EAE5] bg-[#F9FBF9] p-4 sm:px-5 sm:py-4">
                <p className="text-xs font-medium text-[#71717A]">
                  সর্বাধিক দাম
                </p>

                <p className="text-xl leading-snug font-extrabold text-[#DC2626] sm:text-[22px]">
                  {formatPriceValue(maxMarketPrice)}{" "}
                  <span className="text-xs font-semibold sm:text-sm">টাকা</span>
                </p>

                <p className="text-[11px] text-[#71717A]">
                  সবচেয়ে বেশি দামের বাজার
                </p>
              </div>

              {/* Average Price */}
              <div className="space-y-1 rounded-xl border border-[#E5EAE5] bg-[#F9FBF9] p-4 sm:px-5 sm:py-4">
                <p className="text-xs font-medium text-[#71717A]">গড় দাম</p>

                <p className="text-xl leading-snug font-extrabold text-[#15803D] sm:text-[22px]">
                  {formatPriceValue(data.today)}{" "}
                  <span className="text-xs font-semibold sm:text-sm">টাকা</span>
                </p>

                <p className="text-[11px] text-[#71717A]">
                  {data.unit}-এর হিসাবে
                </p>
              </div>
            </div>
          </div>

          {/* Market-wise Prices */}
          <div className="space-y-3.5">
            <h2 className="text-base font-bold text-[#18181B] sm:text-[17px]">
              বাজারভিত্তিক আজকের দাম
            </h2>

            <div className="overflow-hidden rounded-xl border border-[#E2E6E2] bg-[#EFF2EF]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[540px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[#DFE4DF] bg-[#F5F7F5] text-xs font-semibold text-[#71717A]">
                      <th className="w-[32%] px-4 py-3.5 sm:px-5">বাজার</th>
                      <th className="w-[24%] px-4 py-3.5">বিভাগ</th>
                      <th className="w-[14%] px-4 py-3.5">সর্বনিম্ন</th>
                      <th className="w-[15%] px-4 py-3.5">সর্বাধিক</th>
                      <th className="w-[15%] px-4 py-3.5 text-right sm:px-5">
                        গড়
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-[#DFE4DF] text-xs sm:text-[13px]">
                    {data.markets.length > 0 ? (
                      data.markets.map((item, idx) => (
                        <tr
                          key={`${item.market}-${idx}`}
                          className="bg-[#EEF1EE] transition-colors hover:bg-[#E7ECE7]"
                        >
                          <td className="px-4 py-3.5 font-semibold text-[#18181B] sm:px-5">
                            {item.market}
                          </td>

                          <td className="px-4 py-3.5 text-[#52525B]">
                            {item.division}
                          </td>

                          <td className="px-4 py-3.5 text-[#3F3F46] tabular-nums">
                            {formatPriceValue(item.min)} টাকা
                          </td>

                          <td className="px-4 py-3.5 text-[#3F3F46] tabular-nums">
                            {formatPriceValue(item.max)} টাকা
                          </td>

                          <td className="px-4 py-3.5 text-right font-bold text-[#18181B] tabular-nums sm:px-5">
                            {formatPriceValue((item.min + item.max) / 2)} টাকা
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={5}
                          className="py-8 text-center text-sm text-[#71717A]"
                        >
                          বর্তমানে কোনো বাজারের তথ্য পাওয়া যায়নি।
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductPage;

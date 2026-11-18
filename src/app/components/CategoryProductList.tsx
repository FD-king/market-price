"use client";

import { useState } from "react";
import ItemCard from "@/app/components/ItemCard";
import IProduct from "@/types/AllProductsType";

const CategoryProductList = ({ data }: { data: IProduct[] }) => {
  const [sort, setSort] = useState("default");

  const productLowToHigh = data.toSorted((a, b) => a.today - b.today);

  const productHighToLow = data.toSorted((a, b) => b.today - a.today);

  const sortedProducts =
    sort === "low"
      ? productLowToHigh
      : sort === "high"
        ? productHighToLow
        : data;

  return (
    <>
      {/* Sort Control */}
      <div className="mb-5 flex items-center justify-end gap-2">
        <label
          htmlFor="sort"
          className="shrink-0 text-sm font-medium text-[#1D271F]"
        >
          সাজান:
        </label>

        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full rounded-xl border border-[#DCE6DD] bg-white px-3 py-2.5 text-sm text-[#1D271F] outline-none focus:border-emerald-600 sm:w-52"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low">দাম: কম থেকে বেশি</option>
          <option value="high">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedProducts.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default CategoryProductList;

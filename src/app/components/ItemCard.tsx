import type IProduct from "@/types/AllProductsType";

const ItemCard = ({ item }: { item: IProduct }) => {
  const unit =
    item.unit === "kg"
      ? "কেজি"
      : item.unit === "liter"
        ? "লিটার"
        : item.unit === "dozen"
          ? "ডজন"
          : item.unit === "piece"
            ? "পিস"
            : item.unit;

  return (
    <div className="flex h-full w-full flex-col rounded-2xl border border-[#E5E7EB] bg-white p-3 shadow-sm transition-all hover:border-[#078B43]/30 hover:shadow-md">
      {/* Product Information */}
      <div className="flex min-h-[42px] items-start gap-2.5">
        {/* Product Emoji */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-[#F5F5F5]">
          <span className="text-lg">{item.image}</span>
        </div>

        {/* Product Name & Unit */}
        <div className="min-w-0 flex-1">
          <h2 className="line-clamp-2 text-xs font-bold leading-tight text-[#202B23] sm:text-sm">
            {item.nameBn}
          </h2>

          <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
            প্রতি {unit}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-2.5 border-t border-gray-100" />

      {/* Price Information */}
      <div className="flex flex-1 items-end justify-between gap-1">
        {/* Today's Price */}
        <div className="min-w-0">
          <p className="text-[9px] text-gray-400 sm:text-[10px]">আজকের দাম</p>

          <h3 className="mt-0.5 whitespace-nowrap text-sm font-extrabold text-[#202B23] sm:text-base">
            {item.today.toLocaleString("bn-BD")}{" "}
            <span className="font-medium"> টাকা</span>
          </h3>
        </div>

        {/* Price Change Badge */}
        <div
          className={`flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-[9px] font-bold sm:text-[10px] ${
            item.change.dir === "up"
              ? "bg-red-50 text-red-600"
              : item.change.dir === "down"
                ? "bg-emerald-50 text-emerald-700"
                : "bg-slate-100 text-slate-600"
          }`}
        >
          <span>
            {item.change.dir === "up"
              ? "▲"
              : item.change.dir === "down"
                ? "▼"
                : "—"}
          </span>

          <span>{item.change.pct.toLocaleString("bn-BD")}%</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

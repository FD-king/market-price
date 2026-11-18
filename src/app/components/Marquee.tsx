import IProduct from "@/types/AllProductsType";
import Link from "next/link";
import MarqueeText from "react-marquee-text";

const Marquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: IProduct[] = await res.json();

  return (
    <div className="overflow-hidden bg-[#FCFDFB]">
      <MarqueeText duration={50}>
        {data.map((item) => (
          <Link
            href={`/products/${item.id}`}
            key={item.id}
            className="flex shrink-0 items-center gap-2 border-r border-gray-200 px-5 py-2"
          >
            {/* Product Emoji */}
            <span className="text-xs">{item.image}</span>

            {/* Product Name */}
            <span className="whitespace-nowrap text-xs font-medium text-gray-700">
              {item.nameBn}
            </span>

            {/* Price */}
            <span className="whitespace-nowrap text-xs text-gray-600">
              {item.today} টাকা/{item.unit === "kg" ? "কেজি" : item.unit}
            </span>

            {/* Price Change */}
            <span
              className={`whitespace-nowrap text-xs font-bold ${
                item.change.dir === "up"
                  ? "text-red-500"
                  : item.change.dir === "down"
                    ? "text-green-600"
                    : "text-gray-400"
              }`}
            >
              {item.change.dir === "up"
                ? "▲"
                : item.change.dir === "down"
                  ? "▼"
                  : "—"}{" "}
              {item.change.pct}%
            </span>
          </Link>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;

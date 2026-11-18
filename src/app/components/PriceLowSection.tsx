import IProduct from "@/types/AllProductsType";
import ItemCard from "./ItemCard";

const PriceLowSection = ({ data }: { data: IProduct[] }) => {
  const PriceHighData = data
    .filter((item) => item.change.dir === "down")
    .toSorted((a, b) => a.change.pct - b.change.pct);
  return (
    <section id="all-products" className="mx-auto w-full max-w-6xl px-4">
      <div className="grid grid-cols-2 items-stretch gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3">
        {PriceHighData.slice(0, 6).map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PriceLowSection;

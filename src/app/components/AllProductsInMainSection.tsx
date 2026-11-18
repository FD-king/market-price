import type IProduct from "@/types/AllProductsType";
import ItemCard from "./ItemCard";

const AllProductsInMainSection = ({ data }: { data: IProduct[] }) => {
  return (
    <section id="all-products" className="mx-auto w-full max-w-6xl px-4">
      <div className="grid grid-cols-2 items-stretch gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3">
        {data.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default AllProductsInMainSection;

import IMarket from "./MarketType";
import IPriceChange from "./PriceChangeType";

interface IProduct {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: IPriceChange;
  markets: IMarket[];
}

export default IProduct;

export default interface IPriceChange {
  dir: "up" | "down" | "flat";
  pct: number;
}

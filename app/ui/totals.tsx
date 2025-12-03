import { Item } from "../lib/definitions";

export default function Total({ items }: { items: Item[] }) {
  const total = items.reduce((sum, item) => sum + item.total, 0);

  function calculatePaidBy(name: string) {
    const personTotal: number = items
      .filter((item) => item.whoPaid?.toLowerCase() === name.toLowerCase())
      .reduce((sum, item) => sum + item.total, 0);
    return roundToDecimalPlaces(personTotal, 2);
  }

  function roundToDecimalPlaces(number: number, decimals: number) {
    const multiple = Math.pow(10, decimals);
    return Math.round(number * multiple) / multiple;
  }

  return (
    <div>
      <ul>
        <li>Total: {total}</li>
        <li>Benny: {calculatePaidBy("benny")}</li>
        <li>Edwin: {calculatePaidBy("edwin")}</li>
      </ul>
    </div>
  );
}

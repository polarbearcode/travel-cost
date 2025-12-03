import { Item } from "../lib/definitions";

export default function Total({ items }: { items: Item[] }) {
  const total = items.reduce((sum, item) => sum + item.total, 0);

  function calculatePaidBy(name: string) {
    return items
      .filter((item) => item.whoPaid?.toLowerCase() === name.toLowerCase())
      .reduce((sum, item) => sum + item.total, 0);
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

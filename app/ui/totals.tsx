export default function Total({ items }: { items: { total: number }[] }) {
  const total = items.reduce((sum, item) => sum + item.total, 0);
  return (
    <div>
      <ul>
        <li>Total: {total}</li>
        <li>Benny: </li>
        <li>Edwin: </li>
      </ul>
    </div>
  );
}

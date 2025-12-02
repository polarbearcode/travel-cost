import ItemsTable from "./ui/table";
import Total from "./ui/totals";

export default function Page() {
  const items = [{ id: "1", name: "Sample Item", total: 100 }];
  return (
    <main className="flex min-h-screen flex-col p-6">
      <section className="text-center mb-6">
        <h1 className="text-4xl font-bold">Travel Cost Split</h1>
      </section>

      <div className="grid grid-cols-2 gap-6 w-full">
        <div>
          <ItemsTable items={items} />
        </div>
        <div>
          <Total items={items} />
        </div>
      </div>
    </main>
  );
}

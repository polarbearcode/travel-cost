"use server";
import { getItems } from "./lib/data";
import ItemsUI from "./ui/items-ui";
import ItemsTable from "./ui/table";
import Total from "./ui/totals";

export default async function Page() {
  const items = await getItems();

  return (
    <main className="flex min-h-screen flex-col p-6">
      <section className="text-center mb-6">
        <h1 className="text-4xl font-bold">Travel Cost Split</h1>
      </section>

      <ItemsUI items={items} />
    </main>
  );
}

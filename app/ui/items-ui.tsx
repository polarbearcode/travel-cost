"use client";
import { Item } from "../lib/definitions";
import ItemsTable from "./table";
import Total from "./totals";

export default function ItemsUI({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 w-full">
      <div>
        <ItemsTable items={items} />
      </div>
      <div>
        <Total items={items} />
      </div>
    </div>
  );
}

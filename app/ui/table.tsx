"use client";
import { Item } from "@/app/lib/definitions";
import Dropdown from "./dropdown";
import { useState } from "react";
import Form from "./add-item-form";

export default function ItemsTable({ items }: { items: Item[] }) {
  const [showAddItemForm, setShowAddItemForm] = useState(false);

  function handleAddItemClick(value: boolean) {
    setShowAddItemForm(value);
  }

  return (
    <>
      <div className="w-full">
        <h1 className="mb-8 text-xl md:text-2xl">Items</h1>
        <div className="mt-6 flow-root">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
                <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                  <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                    <tr>
                      <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                        Item
                      </th>
                      <th scope="col" className="px-3 py-5 font-medium">
                        Total
                      </th>
                      <th scope="col" className="px-3 py-5 font-medium">
                        Who Paid
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 text-gray-900">
                    {items.map((item) => (
                      <tr key={item.name + item.id} className="group">
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                          {item.name}
                        </td>
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                          {item.total}
                        </td>
                        {item.whoPaid && (
                          <td className=" bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                            {/* Placeholder for "Who Paid" dropdown */}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <button onClick={() => handleAddItemClick(true)}>Add Item</button>
      </div>
      {showAddItemForm && <Form />}
    </>
  );
}

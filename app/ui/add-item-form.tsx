"use client";

import { useActionState } from "react";
import { addItem } from "../lib/data";

export default function Form({ onCancel }: { onCancel: () => void }) {
  const initialState = { message: "", error: "" };
  const [_, formAction] = useActionState(addItem, initialState);
  return (
    <form action={formAction}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="item-name"
        >
          Item Name
        </label>
        <input id="item-name" name="item-name" type="text" />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="item-total"
        >
          Total
        </label>
        <input id="item-total" name="item-total" type="number" />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="who-paid"
        >
          Who Paid
        </label>
        <select
          name="who-paid"
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="">Select Payer</option>
          <option value="benny">Benny</option>
          <option value="edwin">Edwin</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Item
      </button>

      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onCancel}
      >
        Cancel
      </button>
    </form>
  );
}

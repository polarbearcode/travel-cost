"use server";
import postgres from "postgres";
import { FormState } from "./definitions";
import { revalidatePath } from "next/dist/server/web/spec-extension/revalidate";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function addItem(prevState: FormState, formData: FormData) {
  const name = formData.get("item-name")?.toString() || "";
  const total = parseFloat(formData.get("item-total")?.toString() || "0");
  const whoPaid = formData.get("who-paid")?.toString() || "";

  console.log("Adding item:", { name, total, whoPaid });

  try {
    await sql`INSERT INTO items (name, total, who_paid) VALUES (${name}, ${total}, ${whoPaid})`;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add item.");
  }

  revalidatePath("/");

  return { error: "" };
}

export async function getItems() {
  try {
    const items = await sql`SELECT id, name, total, who_paid FROM items`;
    return items.map((item) => ({
      id: item.id,
      name: item.name,
      total: item.total,
      whoPaid: item.who_paid,
    }));
  } catch (error) {
    console.error("Database Error:", error);
    return [];
  }
}

export async function deleteItem(id: number) {
  try {
    await sql`DELETE FROM items WHERE id = ${id}`;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to delete item.");
  }

  revalidatePath("/");
}

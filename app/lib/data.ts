"use server";
import postgres from "postgres";
import { FormState } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function addItem(prevState: FormState, formData: FormData) {
  const name = formData.get("item-name")?.toString() || "";
  const total = parseFloat(formData.get("item-total")?.toString() || "0");
  const whoPaid = formData.get("who-paid")?.toString() || "";

  try {
    await sql`INSERT INTO items (name, total, who_paid) VALUES (${name}, ${total}, ${whoPaid})`;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add item.");
  }

  return { error: "" };
}

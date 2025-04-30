import { useState } from "react";
import { addItem } from "../lib/api";
import { useRouter } from "next/router";

export default function Add() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();

  const save = async () => {
    if (!name || !date) return alert("Both fields required");
    await addItem({ name, expires: date });
    router.push("/");
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Add Item to Smart Fridge</h1>
      <div className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Milk"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 border rounded"
        />
        <button
          onClick={save}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Item
        </button>
      </div>
    </>
  );
}

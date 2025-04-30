import { useState } from "react";
import { getRecipes } from "../lib/api";

export default function Recipes() {
  const [text, setText] = useState("");

  const load = async () => {
    const res = await getRecipes();
    setText(res.choices[0].message.content);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Smart Fridge Recipe Ideas</h1>
      <button
        onClick={load}
        className="bg-emerald-600 text-white px-4 py-2 rounded mb-4"
      >
        Generate Recipes
      </button>
      <div className="bg-white p-4 rounded shadow whitespace-pre-wrap">
        {text || "Tap the button to fetch suggestions…"}
      </div>
    </>
  );
}

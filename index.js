import { useEffect, useState } from "react";
import { listItems } from "../lib/api";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    listItems().then(setItems);
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">My Smart Fridge Items</h1>
      {items.length === 0 ? (
        <p className="text-gray-600">No items yet in your Smart Fridge.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow p-4 flex justify-between"
            >
              <span className="font-medium">{item.name}</span>
              <span className="text-gray-500">{item.expires}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

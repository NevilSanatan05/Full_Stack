import React, { useState } from "react";

function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, name: "Milk" },
    { id: 2, name: "Bread" },
    { id: 3, name: "Eggs" }
  ]);

  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() === "") return;

    const newItemObject = {
      id: Date.now(), // unique key
      name: newItem
    };

    setItems([...items, newItemObject]);
    setNewItem(""); // reset input
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 My Shopping List</h2>

      <ul>
        {items.map(item => (
          <li key={item.id}>✅ {item.name}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newItem}
        placeholder="Add item..."
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>➕ Add</button>
    </div>
  );
}

export default ShoppingList;

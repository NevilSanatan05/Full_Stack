import React from "react";

const foodItems = [
  { id: 1, name: "Pizza", price: 150 },
  { id: 2, name: "Burger", price: 100 },
  { id: 3, name: "Pasta", price: 120 }
];

function FoodList() {
  return (
    <div>
      <h2>🍽️ Available Food Items</h2>
      <ul>
        {foodItems.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price}
          </li>        ))}
      </ul>
    </div>
  );
}

export default FoodList;

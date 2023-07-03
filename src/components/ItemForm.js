import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const ItemForm = ({ onItemFormSubmit }) => {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new item object
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    // Pass the new item to the onItemFormSubmit callback
    onItemFormSubmit(newItem);

    // Reset the form
    setItemName("");
    setItemCategory("Produce");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={itemName} onChange={(event) => setItemName(event.target.value)} />
      </label>
      <label>
        Category:
        <select value={itemCategory} onChange={(event) => setItemCategory(event.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
};

export default ItemForm;

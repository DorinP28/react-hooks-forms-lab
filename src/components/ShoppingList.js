import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items: initialItems }) {
  const [items, setItems] = useState(initialItems);
  const [formData, setFormData] = useState({
    search: "",
    filter: "All",
  });

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function onItemFormSubmit(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  const itemsToDisplay = items.filter((item) => {
    if (formData.filter === "All") {
      return item.name.toLowerCase().includes(formData.search.toLowerCase());
    } else {
      return item.category === formData.filter && item.name.toLowerCase().includes(formData.search.toLowerCase());
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={formData.search} onSearchChange={handleFormChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

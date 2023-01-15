import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [newItems, setItems] = useState(items);

  const filterFunction = (event) =>
  {
    const category = event.target.value;
    const newItemsArray = items.filter((item) => item.category == category);
    setItems(newItemsArray)
  }

  const item = newItems.map((item) => (
    <Item key={item.id} id={item.id} name={item.name} category={item.category} />
  ))


  // setFoods(newFoodArray);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterFunction}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {item}
      </ul>
    </div>
  );
}

export default ShoppingList;

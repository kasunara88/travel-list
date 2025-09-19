import { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onToogleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToogleItem={onToogleItem}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Short by input order</option>
          <option value="description">Short by description</option>
          <option value="packed">Short by packed</option>
        </select>
        <button onClick={onClearList}>CLEAR LIST</button>
      </div>
    </div>
  );
}

export default PackingList;

function Item({ item, onDeleteItem, onToogleItem }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToogleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
          <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </span>
      </li>
    </div>
  );
}

export default Item;

function Stats({ items }) {
  return (
    <footer className="stats">
      <em>
        💼 You have {items.length} items on your list, and you already packed 0
        (0%)
      </em>
    </footer>
  );
}

export default Stats;

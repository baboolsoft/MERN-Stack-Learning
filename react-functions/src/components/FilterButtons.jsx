import React from "react";

function FilterButtons({ filter, setFilter }) {
  const categories = ["All", "Electronics", "Clothing", "Books"];

  return (
    <div>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setFilter(cat)}
          style={{
            fontWeight: filter === cat ? "bold" : "normal",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;

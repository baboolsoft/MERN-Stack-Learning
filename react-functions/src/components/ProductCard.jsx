import React from "react";

function ProductCard({ product, onSelect, onToggleCart, inCart }) {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>{product.category}</p>
      <button onClick={() => onSelect(product)}>View Details</button>
      <button onClick={() => onToggleCart(product)}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;

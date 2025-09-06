import React from "react";

function ProductDetails({ product, onClose, onToggleCart, cart }) {
  const inCart = cart.some((c) => c.id === product.id);

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <p><b>Category:</b> {product.category}</p>
      <p><b>Price:</b> ${product.price}</p>
      <p>{product.description}</p>

      <button onClick={() => onToggleCart(product)}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ProductDetails;

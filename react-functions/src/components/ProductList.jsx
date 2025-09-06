import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, onSelect, onToggleCart, cart }) {
  if (products.length === 0) return <p>No products found.</p>;

  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onSelect={onSelect}
          onToggleCart={onToggleCart}
          inCart={cart.some((c) => c.id === p.id)}
        />
      ))}
    </div>
  );
}

export default ProductList;

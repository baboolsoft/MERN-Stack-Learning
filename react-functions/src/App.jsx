import React, { useState } from "react";
import products from "./data/products";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";
import Cart from "./components/Cart";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || p.category === filter;
    return matchesSearch && matchesFilter;
  });

  const toggleCart = (product) => {
    if (cart.find((c) => c.id === product.id)) {
      setCart(cart.filter((c) => c.id !== product.id));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, change) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>Shopping <Area:r></Area:r></h1>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchBar search={search} setSearch={setSearch} />
      <FilterButtons filter={filter} setFilter={setFilter} />

      <ProductList
        products={filteredProducts}
        onSelect={setSelected}
        onToggleCart={toggleCart}
        cart={cart}
      />

      {selected && (
        <ProductDetails
          product={selected}
          onClose={() => setSelected(null)}
          onToggleCart={toggleCart}
          cart={cart}
        />
      )}

      <Cart cart={cart} updateQuantity={updateQuantity} onToggleCart={toggleCart} />
    </div>
  );
}

export default App;

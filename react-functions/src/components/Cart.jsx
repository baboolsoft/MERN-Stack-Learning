import React from "react";

function Cart({ cart, updateQuantity, onToggleCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>🛒 Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price} × {item.quantity}
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <button onClick={() => onToggleCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p><b>Total:</b> ${total}</p>
    </div>
  );
}

export default Cart;

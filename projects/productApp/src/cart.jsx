import React from "react";

function CartApp({ cartItems }) {
  return (
    <div>
      
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CartApp;

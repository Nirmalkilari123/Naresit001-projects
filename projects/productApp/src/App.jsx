import React, { useState } from 'react';
import ProductApp from './product';
import CartApp from './cart';
import './App.css'; 

function App() {
  const [cartItems, setCartItems] = useState([]);

  
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  
  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div>
      <h1 className="head">Amazon Shopping App</h1>
      <div className="item-count">
        <h1>Items: {cartItems.length}</h1>
      </div>
      <button className="remove-item-btn" onClick={() => removeFromCart(0)}>Remove Item</button>
      <ProductApp addToCart={addToCart} />
      <CartApp cartItems={cartItems} />
    </div>
  );
}

export default App;

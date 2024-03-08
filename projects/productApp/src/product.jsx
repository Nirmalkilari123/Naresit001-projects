import React, { useEffect, useState } from 'react';
import CartApp from './cart';
import "./product.css"

function ProductApp({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="product-container">
      {products.map((pr) => (
        <div className="product-item" key={pr.id}>
          <img src={pr.image} alt={pr.title} />
          <h2 className="product-title">{pr.title}</h2>
          <button className="add-to-cart-btn" onClick={() => addToCart(pr)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductApp;

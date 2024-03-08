import React, { useState } from "react";
import "./App.css"; // Import CSS file

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 25) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
        className="counter-input"
      />
      <div className="button-container">
        <button onClick={handleIncrement} className="increment-btn">
          Increment
        </button>
        <button onClick={handleDecrement} className="decrement-btn">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterApp;

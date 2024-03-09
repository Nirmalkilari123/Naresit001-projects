import React from 'react';
import  { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  const handleZero=()=>{
    setCount(0)
  }

  const isEven = count % 2 === 0;

  return (
    <div>
      <h2 style={{color:'orange',fontSize:'30px'}}>Counter</h2>
      <div>
      <p>The count is {count} {isEven ? 'even' : 'odd'}.</p>
        <button style=
        {{height:'20px',width:'35px', border:'2px',backgroundColor:'green' ,color:'white',margin:'10px'}}
        onClick={handleDecrement}>+</button>
        <button
        style=
        {{height:'20px',width:'35px', border:'2px',backgroundColor:'green' ,color:'white' ,margin:'10px'}}
        onClick={handleZero}>0</button>
        <button 
        style=
        {{height:'20px',width:'35px', border:'2px',backgroundColor:'red' ,color:'white',margin:'10px'}}
        onClick={handleIncrement}>-</button>
      </div>
    
    </div>
  );
}

export default Counter;

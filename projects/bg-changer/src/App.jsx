import React, { useState } from "react";
import "./App.css";

function BgChanger() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff"); 

  const handleColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  return (
    
    <div style={{ backgroundColor  }}>
      <h1  className="head">Bg-ColorChanger</h1>
      <input
        type="color"
        value={backgroundColor}
        onChange={handleColorChange}
        
      />
    </div>
    
  );
}

export default BgChanger;

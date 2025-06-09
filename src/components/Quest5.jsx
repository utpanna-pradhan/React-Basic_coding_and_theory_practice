import React from "react";
import { useState } from "react";

function Quest5() {
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: "lightgray",
    color: "black",
    padding: "10px 20px",
    borderRadius: "12px",
  });
  const handleStyle = () => {
    setButtonStyle({
      backgroundColor: "red",
      color: "black",
      padding: "10px 20px",
      borderRadius: "12px",
      border: "3px dotted black",
    });
  };
  return (
    <div>
      <h1>Q). Add inline styles to a component dynamically using useState.</h1>
      <button style={buttonStyle} onClick={handleStyle}>
        Click me to chnage the style
      </button>
    </div>
  );
}

export default Quest5;

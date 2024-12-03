import { useState } from "react";
function Color() {
    const [color, setColor] = useState("red");
    const changeColor = (newColor) => {
        setColor(newColor);
    };
    return (
      <div style={{ backgroundColor: color, padding: "20px", textAlign: "center" }}>
        <h1>My favorite color is {color}!</h1>
        <button type="button" onClick={() => changeColor("blue")}>Blue</button>
        <button type="button" onClick={() => changeColor("red")}>Red</button>
        <button type="button" onClick={() => changeColor("pink")}>Darkpink</button>
        <button type="button" onClick={() => changeColor("green")}>Green</button>
      </div>
    );
  }
export default Color;

import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

//now add below the props data color from parent into the child component
function Child({ onChangeColor, color }) {
  //console.log(onChangeColor)
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }

  return <div 
  onClick={handleClick}
  className="child" 
  style={{ backgroundColor: "#FFF" }} 
  />;
}

export default Child;

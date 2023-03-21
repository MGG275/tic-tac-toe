import React from "react";
import Square from "../Square";
import "./style.css";

export default function Board({ arrayValues, handleClicParametro }) {
  return (
    <div className="board">
      {arrayValues.map((value, index) => (
        <Square
          i={index}
          valueSquare={value}
          handleClic={handleClicParametro}
        />
      ))}
    </div>
  );
}

import React from "react";
import "./style.css";

export default function Square({ valueSquare, i, handleClic }) {
  return (
    <div className={valueSquare} id={`case${i}`} onClick={() => handleClic(i)}>
      {valueSquare}
    </div>
  );
}

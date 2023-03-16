import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Winner from "./components/Winner";
import calculateWinner from "./utils/helper";

function App() {
  const [squareValues, setSquareValues] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");

  const handleClic = (i) => {
    let copyArray = [...squareValues];

    if (copyArray[i] === "" && winner === null) {
      if (turn) {
        copyArray[i] = "X";
        setSquareValues(copyArray);
      } else {
        copyArray[i] = "O";
        setSquareValues(copyArray);
      }
      setTurn(!turn);
    }
  };

  const winner = calculateWinner(squareValues);

  const handleReset = () => {
    setSquareValues(Array(9).fill(""));
    setTurn("X");
  };

  return (
    <div id="div-app">
      <div>
        <p>Tic Tac Toe</p>
      </div>
      <Board handleClicParametro={handleClic} arrayValues={squareValues} />
      {winner !== null ? (
        <Winner handleReset={handleReset} ganador={winner} />
      ) : null}
    </div>
  );
}

export default App;

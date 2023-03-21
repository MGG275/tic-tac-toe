export default function calculateWinner(tableValues, handleClic) {
  const linesWinners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < linesWinners.length; i++) {
    const [a, b, c] = linesWinners[i];
    if (
      tableValues[a] !== "" &&
      tableValues[a] === tableValues[b] &&
      tableValues[b] === tableValues[c]
    ) {
      return `The winner is ${tableValues[a]}`;
    }
  }
  if (!tableValues.includes("")) {
    return "The game was a draw";
  }

  return null;
}

import React from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  const nextPlayer = xIsNext ? "X" : "O";
  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next Player: ${nextPlayer}`;

  function handleClick(squareIndex) {
    if (squares[squareIndex] || winner) {
      return;
    }
    const squaresCopy = squares.slice();
    squaresCopy[squareIndex] = nextPlayer;
    setXIsNext(!xIsNext);
    setSquares(squaresCopy);
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const winningCombinations = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6]
  ];
  let winner = null;
  winningCombinations.find(combination => {
    let [a, b, c] = combination;
    if (
      squares[a] === squares[b] &&
      squares[b] === squares[c] &&
      squares[a] !== null
    ) {
      winner = squares[a];
      return true;
    }
  });

  // winningCombinations.forEach(combination => {
  //   let [a, b, c] = combination;
  //   if (
  //     squares[a] === squares[b] &&
  //     squares[b] === squares[c] &&
  //     squares[a] !== null
  //   ) {
  //     winner = squares[a];
  //   }
  // });
  return winner;
}

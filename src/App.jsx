import React, { useState } from "react";
import Player from "./Components/Player/Player";
import GameBoard from "./Components/GameBoard/GameBoard";
import Log from "./Components/Log/Log.jsx";
import WINNING_COMBINATIONS from "./winning-combinations.js";
import GameOver from "./Components/GameOver/GameOver.jsx";
function derivePlayer(gameTurns) {
  let currPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currPlayer = "O";
  }

  return currPlayer;
}
const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function deriveWinner(gameBoard, players) {
  let winner = undefined;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0]?.row][combination[0]?.column];
    const secoundSquare =
      gameBoard[combination[1]?.row][combination[1]?.column];
    const thirdSquare = gameBoard[combination[2]?.row][combination[2]?.column];
    if (
      firstSquare === secoundSquare &&
      secoundSquare === thirdSquare &&
      firstSquare
    ) {
      //winner => 'O' , 'X'
      winner = players[firstSquare];
    }
  }
  return winner;
}
function deriveGameBoard(gameTurns) {
  let gameBoard = [...initalGameBoard.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {
  const [gameTurns, setGameTurns] = React.useState([]);
  const activePlayer = derivePlayer(gameTurns);
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  let gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prev) => {
      return {
        ...prev,
        [symbol]: newName,
      };
    });
  }
  function handleRematch() {
    setGameTurns([]);
    gameBoard = initalGameBoard;
  }
  function handlePlayerChange(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currPlayer = derivePlayer(prevTurns);
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...prevTurns,
      ];
      return updatedTurn;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={"Player 1"}
            symbol={"X"}
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            name={"Player 2"}
            symbol={"O"}
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || (!winner && gameTurns.length === 9)) && (
          <GameOver winner={winner} handleRematch={handleRematch} />
        )}
        <GameBoard handleSquare={handlePlayerChange} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;

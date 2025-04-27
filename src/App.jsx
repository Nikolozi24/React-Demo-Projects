import React, { useState } from "react";

import Player from "./Components/Player/Player";
import GameBoard from "./Components/GameBoard/GameBoard";
import Log from "./Components/Log/Log.jsx";
import GameOver from "./Components/GameOver/GameOver.jsx";
import {
  deriveGameBoard,
  derivePlayer,
  deriveWinner,
  initalGameBoard,
} from "./AppUtilFunc.js";

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

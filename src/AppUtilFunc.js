import WINNING_COMBINATIONS from "./winning-combinations";

const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function deriveWinner(gameBoard, players) {
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

export function deriveGameBoard(gameTurns) {
  let gameBoard = [...initalGameBoard.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

export function derivePlayer(gameTurns) {
  let currPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currPlayer = "O";
  }

  return currPlayer;
}

export default function GameBoard({ handleSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((col, colInd) => (
                <li key={colInd}>
                  <button
                    onClick={() => {
                      handleSquare(rowIndex, colInd);
                    }}
                    disabled={col !== null}
                  >
                    {col}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}

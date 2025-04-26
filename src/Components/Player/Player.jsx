import React from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [playerName, setPlayerName] = React.useState(name || undefined);
  const handleChange = (e) => {
    const val = e.target.value;
    setPlayerName(val);
  };
  const Buttons = {
    Edit: (
      <button
        onClick={() => {
          setIsEditMode((prev) => true);
        }}
      >
        Edit
      </button>
    ),
    Save: (
      <button
        onClick={() => {
          setIsEditMode((prev) => false);
          onChangeName(symbol, playerName);
        }}
      >
        Save
      </button>
    ),
  };
  let PlayerName = isEditMode ? (
    <input
      type="text"
      onChange={(e) => handleChange(e)}
      value={playerName}
      placeholder={name}
    />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {PlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      {isEditMode ? Buttons.Save : Buttons.Edit}
    </li>
  );
}

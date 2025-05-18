import { useState, useRef } from "react";
export default function Player() {
  const [name, setName] = useState(null);
  const playerName = useRef();
  const handleClick = () => {
    setName((prev) => playerName.current.value);
  };
  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={() => handleClick()}>Set Name</button>
      </p>
    </section>
  );
}

import TimerChallange from "./components/Challange/TimerChallange.jsx";
import Player from "./components/Player.jsx";
import React from "react";
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title={"Something"} targetTime={1} />
        <TimerChallange title={"Something"} targetTime={5} />
        <TimerChallange title={"Something"} targetTime={10} />
        <TimerChallange title={"Something"} targetTime={15} />
      </div>
    </>
  );
}

export default App;

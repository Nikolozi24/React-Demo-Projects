import React, { useRef, useState } from "react";
import {
  ChallangeButton,
  ChallangeH2,
  ChallangeP,
  ChallangeSection,
  ActiveOrNotP,
} from "./TimerStyles.jsx";
import ResultModal from "../Result/ResultModal.jsx";

function TimerChallange({ title, targetTime }) {
  const dialog = useRef();
  const timer = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.openDoor();
  }
  function handleReset() {
    setTimeRemaining((prev) => targetTime * 1000);
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
      console.log(timeRemaining)
    }, 10);
  }
  function handleStop() {
    dialog.current.openDoor();
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModal
        targetTime={targetTime}
        ref={dialog}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <ChallangeSection>
        <ChallangeH2>{title}</ChallangeH2>
        <ChallangeP>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </ChallangeP>
        <p>
          <ChallangeButton onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challange
          </ChallangeButton>
        </p>
        <ActiveOrNotP
          className={timerIsActive ? "active" : undefined}
          $isActive={timerIsActive}
        >
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </ActiveOrNotP>
      </ChallangeSection>
    </>
  );
}

export default TimerChallange;

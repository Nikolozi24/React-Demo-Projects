import React from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import {createPortal} from 'react-dom';

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const userLost = remainingTime <= 0;
  const formatedRemainTime = (remainingTime / 1000).toFixed(2);
 const score =  Math.round(1-(remainingTime/(targetTime*1000)) )*100;
 console.log(score)
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      openDoor() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal (

    <dialog ref={dialog} className="result-modal">
      {<h2>You Lost </h2> && userLost}
      {!userLost && <h2> Your Score {score}!</h2>}
      <p>
        The target time was
        <strong>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </strong>
      </p>
      <p>
        You stopped the wimer with
        <strong>{formatedRemainTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;

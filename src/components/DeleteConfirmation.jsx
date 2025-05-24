import { useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {


useEffect(()=>{

  /// confoirm  delete process after 3sec
  console.log("create TimeOut")
    const timerPointer = setTimeout(()=>{
        onConfirm();

    }, TIMER)

  /// but if user click cancel or confirm  faster it's must be deleted
  // calling cleanup functin

  return ()=>{
    console.log("Clear Timeout");
    clearTimeout(timerPointer);
  }
  



},[onConfirm])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
     <ProgressBar timer={TIMER}/>
    </div>
  );
}

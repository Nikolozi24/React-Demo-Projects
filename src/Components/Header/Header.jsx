import React from "react";
import imgSrc from "../../../public/investment-calculator-logo.png";
export function Header() {
  return (
    <div id="header">
      <img src={imgSrc} alt="invenstment calculator image" />
      <h1>Investment Calculator</h1>
    </div>
  );
}

import React from "react";
import { Header } from "./Components/Header/Header";
import UserHandler from "./Components/UserHandler/UserHandler";
import Results from "./Components/Results/Results";

function App() {
  const [userInput, setUserInput] = React.useState({
    initialInvestment: 100,
    annualInvestment: 100,
    expectedReturn: 100,
    duration: 1,
  });
  const inputIsValid = userInput.duration >= 1;
  return (
    <>
      <Header />
      <UserHandler value={userInput} handleChange={setUserInput} />
      {!inputIsValid && (
        <p className="center">Plase Eneter a Duration Greater Than Zero!.</p>
      )}
      {inputIsValid && <Results inputs={userInput} />}
    </>
  );
}

export default App;

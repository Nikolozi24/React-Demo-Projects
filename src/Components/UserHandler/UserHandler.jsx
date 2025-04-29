import React from "react";
import UserInput from "./UserInput";
import RemoveSpaces from "../../util/RemoveSpaces.js";
function UserHandler({ value, handleChange }) {
  const inputFields = [
    "initial Investment",
    "annual Investment",
    "expected Return",
    "duration",
  ];
  let counter = 0;
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          label={inputFields[0]}
          value={value[RemoveSpaces(inputFields[0])]}
          handleChange={handleChange}
        />
        <UserInput
          label={inputFields[1]}
          value={value[RemoveSpaces(inputFields[1])]}
          handleChange={handleChange}
        />
      </div>
      <div className="input-group">
        <UserInput
          label={inputFields[2]}
          value={value[RemoveSpaces(inputFields[2])]}
          handleChange={handleChange}
        />
        <UserInput
          label={inputFields[3]}
          value={value[RemoveSpaces(inputFields[3])]}
          handleChange={handleChange}
        />
      </div>
    </section>
  );
}

export default UserHandler;

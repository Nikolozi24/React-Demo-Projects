import React from "react";
import RemoveSpaces from "../../util/RemoveSpaces";
function UserInput({ label, value = "", handleChange }) {
  return (
    <p>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => {
          const { name, value } = e.target;
          handleChange((prev) => {
            return {
              ...prev,
              [name]: +value,
            };
          });
        }}
        type="number"
        name={RemoveSpaces(label)}
      />
    </p>
  );
}

export default UserInput;

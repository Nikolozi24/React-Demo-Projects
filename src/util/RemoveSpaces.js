import React from "react";

function RemoveSpaces(str) {
  return str.replace(/\s+/g, ""); // Replaces all whitespace characters with nothing
}

export default RemoveSpaces;

import React, { useEffect, useState } from "react";
function Done({ value, id, changeDone }) {
  return (
    <div className={"done-div-button"}>
      <button className={"done-button"} onClick={() => changeDone(id, value)}>
        {value ? "undone" : "done"}
      </button>
    </div>
  );
}

export default Done;

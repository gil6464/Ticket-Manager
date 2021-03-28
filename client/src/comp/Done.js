import React from "react";
import axios from "axios";
function Done({ value, id }) {
  function setDone() {
    axios.patch(`/api/tickets/${id}/done`);
  }
  function setUnDone() {
    axios.patch(`/api/tickets/${id}/undone`);
  }
  if (value) {
    return (
      <span>
        Done:
        <input
          className="checkbox"
          type="checkbox"
          defaultChecked={true}
          onChange={() => setUnDone()}
        />
      </span>
    );
  }
  return (
    <span>
      Done:
      <input
        className="checkbox"
        type="checkbox"
        defaultChecked={false}
        onChange={() => setDone()}
      />
    </span>
  );
}

export default Done;

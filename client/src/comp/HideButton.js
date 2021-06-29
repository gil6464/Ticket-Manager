import React from "react";

function HideButton({ hideTicket, id }) {
  return (
    <div className="hideButtonDiv">
      <button
        onClick={() => {
          hideTicket(id);
        }}
        className="hideTicketButton"
      >
        X
      </button>
    </div>
  );
}

export default HideButton;

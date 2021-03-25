import React from "react";

function HideButton({ hideTicket, id }) {
  return (
    <button
      onClick={() => {
        hideTicket(id);
      }}
      className="hideTicketButton"
    >
      Hide me!
    </button>
  );
}

export default HideButton;

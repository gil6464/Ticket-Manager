import React from "react";

function RevealData({ showTicket }) {
  return (
    <button id="restoreHideTickets" onClick={() => showTicket()}>
      reveal tickets!
    </button>
  );
}

export default RevealData;

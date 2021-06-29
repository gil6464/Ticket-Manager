import React from "react";

function Header({ showTicket, value }) {
  return (
    <div>
      <h1>Ticket Manager</h1>
      <div id="counter">
        <span>Hidden tickets: </span>
        <span id="hideTicketsCounter">{value} </span>
      </div>
      <div id="button-id">
        <button id="restoreHideTickets" onClick={() => showTicket()}>
          reveal tickets!
        </button>
      </div>
    </div>
  );
}

export default Header;

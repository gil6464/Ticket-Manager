import React from "react";

function HideButton(props) {
  function handleClick(event) {
    const container = event.target.parentNode;
    container.className = "hide";
  }
  return (
    <button onClick={handleClick} className="hideTicketButton">
      Hide me!
    </button>
  );
}

export default HideButton;

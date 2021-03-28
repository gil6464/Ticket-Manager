import React from "react";
import HideButton from "./HideButton";
import Label from "./Label";

function Ticket({ ticket, hideTicket }) {
  return (
    <div className="ticket">
      <div className="title">
        <h4>{ticket.title}</h4>
      </div>
      <div>{ticket.content}</div>
      <div>Email: {ticket.userEmail}</div>
      <div>done: {ticket.done}</div>
      <div>creation: {new Date(ticket.creationTime).toDateString()}</div>
      <HideButton hideTicket={hideTicket} id={ticket._id} />
      {ticket.labels &&
        ticket.labels.map((ticket, i) => <Label label={ticket} key={i} />)}
    </div>
  );
}

export default Ticket;

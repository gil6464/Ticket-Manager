import React from "react";
import HideButton from "./HideButton";
import Label from "./Label";
import Done from "./Done";

function Ticket({ ticket, hideTicket }) {
  return (
    <div className="ticket">
      <HideButton hideTicket={hideTicket} id={ticket._id} />
      <div className="title">
        <h4>{ticket.title}</h4>
      </div>
      <div>{ticket.content}</div>
      <div>Email: {ticket.userEmail}</div>
      <Done value={ticket.done} id={ticket._id} />
      <div>creation: {new Date(ticket.creationTime).toDateString()}</div>
      {ticket.labels &&
        ticket.labels.map((ticket, i) => <Label label={ticket} key={i} />)}
    </div>
  );
}

export default Ticket;

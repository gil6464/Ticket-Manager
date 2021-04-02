import React from "react";
import HideButton from "./HideButton";
import Label from "./Label";
import Done from "./Done";

function Ticket({ ticket, hideTicket, changeDone, checkDone }) {
  return (
    <div className="ticket">
      <div className={checkDone(ticket.done)}>
        <HideButton hideTicket={hideTicket} id={ticket._id} />
        <div className="title">
          <h4>{ticket.title}</h4>
        </div>
        <div>{ticket.content}</div>
        <div>
          Email: {ticket.userEmail} | creation:{" "}
          {new Date(ticket.creationTime).toDateString()}
        </div>
        {ticket.labels &&
          ticket.labels.map((ticket, i) => <Label label={ticket} key={i} />)}
        <Done value={ticket.done} id={ticket._id} changeDone={changeDone} />
      </div>
    </div>
  );
}

export default Ticket;

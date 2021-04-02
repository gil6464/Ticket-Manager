import React from "react";
import HideButton from "./HideButton";
import Label from "./Label";
import Done from "./Done";
import emailIcon from "../email icon.webp";
import clockIcon from "../clock icon.png";

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
          <img src={emailIcon}></img>
          {ticket.userEmail} | <img src={clockIcon}></img>
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

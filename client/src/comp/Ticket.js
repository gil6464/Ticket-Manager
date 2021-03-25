import React from "react";
import HideButton from "./HideButton";
import Label from "./Label";

function Ticket({ obj, hideTicket }) {
  return (
    <div className="ticket">
      <div> title: {obj.title}</div>
      <div>content: {obj.content}</div>
      <div>Email: {obj.userEmail}</div>
      <div>done: {obj.done}</div>
      <div>creation: {obj.creationTime}</div>
      <HideButton hideTicket={hideTicket} id={obj._id} />
      {obj.labels && obj.labels.map((obj, i) => <Label label={obj} key={i} />)}
    </div>
  );
}

export default Ticket;

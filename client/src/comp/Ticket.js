import React from "react";
import Label from "./Label";
import "../App.css";
import HideButton from "./HideButton";
function Ticket({ obj }) {
  return (
    <div className="ticketContainer">
      <span className="title">{obj.title}</span>
      <div className="content">{obj.content}</div>
      <div className="email">{obj.userEmail}</div>
      <div className="done">{obj.done}</div>
      <div className="creationTime">{obj.creationTime}</div>
      <HideButton />
      {obj.labels && obj.labels.map((obj, i) => <Label label={obj} key={i} />)}
    </div>
  );
}

export default Ticket;

import React from "react";
import Label from "./Label";

function Ticket({ obj }) {
  return (
    <div className="ticket">
      title: {obj.title}
      <hr></hr>
      lable:{obj.labels && obj.labels.map(obj => <Label label={obj} />)}
    </div>
  );
}

export default Ticket;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Ticket from "./Ticket";

function Input({ setViewData }) {
  function handleChange(event) {
    const value = event.target.value;
    axios.get(`/api/tickets?searchText=${value}`).then(result => {
      setViewData(result.data);
    });
  }
  return (
    <div className="inputDiv">
      <input id="searchInput" onChange={handleChange}></input>
    </div>
  );
}

export default Input;

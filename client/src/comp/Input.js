import React, { useEffect, useState } from "react";
import axios from "axios";
import Ticket from "./Ticket";

function Input({ setData }) {
  function handleChange(event) {
    const value = event.target.value;
    axios.get(`/api/tickets?searchText=${value}`).then(result => {
      setData(result.data);
    });
  }
  return (
    <div>
      <input id="searchInput" onChange={handleChange}></input>
    </div>
  );
}

export default Input;

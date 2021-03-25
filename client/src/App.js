import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import Ticket from "./comp/Ticket";
import Input from "./comp/Input";
import TicketCounter from "./TicketCounter";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/tickets")
      .then(result => {
        setData(result.data);
      })
      .catch(e => {
        console.log("There was a problem with the fetch from the server :", e);
      });
  }, []);

  return (
    <div>
      <TicketCounter />
      <Input setData={setData} />
      {data.map((obj, i) => (
        <Ticket obj={obj} key={i} />
      ))}
    </div>
  );
}

export default App;

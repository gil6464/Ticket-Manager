import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import Ticket from "./comp/Ticket";
import Input from "./comp/Input";
import TicketCounter from "./TicketCounter";
import RevealData from "./comp/RevealData";

function App() {
  const [data, setData] = useState([]);
  const [viewData, setViewData] = useState([]);

  function hideTicket(id) {
    let ticketArr = viewData.filter(ticket => ticket._id !== id);
    setViewData(ticketArr);
  }
  function showTicket() {
    setViewData(data);
  }
  useEffect(() => {
    axios
      .get("/api/tickets")
      .then(result => {
        setData(result.data);
        setViewData(result.data);
      })
      .catch(e => {
        console.log("There was a problem with the fetch from the server :", e);
      });
  }, []);

  return (
    <div>
      <RevealData showTicket={showTicket} />
      <TicketCounter value={data.length - viewData.length} />
      <Input setViewData={setViewData} />
      {viewData.map((obj, i) => (
        <Ticket obj={obj} key={i} hideTicket={hideTicket} />
      ))}
    </div>
  );
}

export default App;

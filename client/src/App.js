import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import Ticket from "./comp/Ticket";
import Input from "./comp/Input";
import Header from "./Header";

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
  function changeDone(id, value) {
    let address = ""; // the add for the patch request, insted write twice almost same add, used this variable.

    if (value) {
      address = "undone";
    } else {
      address = "done";
    }
    try {
      axios.patch(`/api/tickets/${id}/${address}`);
      setData(
        data.map(ticket => {
          if (ticket._id === id) {
            ticket.done = !ticket.done;
          }
          return ticket;
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
  function checkDone(value) {
    if (value) {
      return "done";
    } else {
      return "undone";
    }
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
      <Header showTicket={showTicket} value={data.length - viewData.length} />
      <Input setViewData={setViewData} />
      {viewData.map((ticket, i) => (
        <Ticket
          ticket={ticket}
          key={i}
          hideTicket={hideTicket}
          changeDone={changeDone}
          checkDone={checkDone}
        />
      ))}
    </div>
  );
}

export default App;

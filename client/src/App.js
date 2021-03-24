import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import Ticket from "./comp/Ticket";
import Input from "./comp/Input";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/tickets").then(result => {
      setData(result.data);
    });
  }, []);

  return (
    <div>
      <Input />
      {data.map((obj, i) => (
        <Ticket obj={obj} key={i} />
      ))}
    </div>
  );
}

export default App;

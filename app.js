const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGO_URI;
const Tickets = require("./routes/tickets");

app.use(express.static("client/build"));
app.use(express.json());
app.get("/api/tickets", async (req, res) => {
  try {
    let data = await Tickets.find({});
    const { searchText } = req.query;
    if (searchText) {
      const lowerCaseText = searchText.toLowerCase();
      data = data.filter(serach => {
        return serach.title.toLowerCase().includes(lowerCaseText);
      });
    }
    res.json(data);
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json("There was a problem with our server, please try again later");
  }
});
app.patch("/api/tickets/:ticketId/done", (req, res) => {
  const ticketId = req.params.ticketId;
  Tickets.findByIdAndUpdate(ticketId, { done: true }, () => {
    res.json({ updated: true });
  });
});
app.patch("/api/tickets/:ticketId/undone", (req, res) => {
  const ticketId = req.params.ticketId;
  Tickets.findByIdAndUpdate(ticketId, { done: false }, () => {
    res.json({ updated: true });
  });
});
module.exports = app;

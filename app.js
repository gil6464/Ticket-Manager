const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGO_URI;
const tickets = require("./routes/tickets");

app.use(express.static("client/build"));
app.use("/api/tickets", tickets);
module.exports = app;

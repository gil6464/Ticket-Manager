const router = require("express").Router();
const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  title: { type: String, require: true },
  content: { type: String, require: true },
  userEmail: { type: String, require: true },
  done: { type: Boolean, require: true },
  creationTime: { type: Date, default: new Date() },
  lables: { type: Array },
});

router.get("/", (req, res) => {
  res.send("tickets");
});

module.exports = router;

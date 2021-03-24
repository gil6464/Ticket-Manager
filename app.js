const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGO_URI;
const Tickets = require("./routes/tickets");

app.use(express.static("client/build"));

app.get("/api/tickets", async (req, res) => {
  try {
    let data = await Tickets.find({});
    const { searchText } = req.query;
    if (searchText) {
      data =
        data &&
        data.filter(serach => {
          return serach.title.toLowerCase().includes(searchText.toLowerCase());
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
module.exports = app;
//   data =
//     data &&
//     data.filter(serach => {
//       return serach.title
//         .toLowerCase()
//         .includes(searchText.toLocaleLowerCase);
//     });
// }

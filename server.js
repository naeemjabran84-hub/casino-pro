const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/dice", (req, res) => {
  res.json({
    roll: Math.floor(Math.random() * 6) + 1
  });
});

app.listen(3000, () => {
  console.log("Server running");
});

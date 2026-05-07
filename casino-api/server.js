const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Dice
app.get("/dice", (req, res) => {
  let roll = Math.floor(Math.random()*6)+1;
  res.json({ roll });
});

// Coin
app.get("/coin", (req, res) => {
  res.json({ win: Math.random() > 0.5 });
});

// Slot
app.get("/slot", (req, res) => {
  let symbols = ["🍒","🍋","🔔","💎","7️⃣"];
  let result = [
    symbols[Math.floor(Math.random()*symbols.length)],
    symbols[Math.floor(Math.random()*symbols.length)],
    symbols[Math.floor(Math.random()*symbols.length)]
  ];
  res.json(result);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});


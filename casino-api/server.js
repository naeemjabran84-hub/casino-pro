<!DOCTYPE html>
<html>
<head>
  <title>Casino Pro</title>
  <style>
    body {
      font-family: Arial;
      background: black;
      color: white;
      text-align: center;
      padding: 40px;
    }

    button {
      padding: 10px 20px;
      margin: 10px;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <h1>Casino Pro</h1>

  <button onclick="dice()">Roll Dice</button>
  <button onclick="coin()">Flip Coin</button>
  <button onclick="roulette()">Roulette</button>
  <button onclick="slots()">Slots</button>
  <button onclick="blackjack()">Blackjack</button>

  <h2 id="result"></h2>

  <script>
    const API = "https://casino-pro.onrender.com";

    async function dice() {
      const r = await fetch(API + "/dice");
      const d = await r.json();
      document.getElementById("result").innerText = "Dice: " + d.roll;
    }

    async function coin() {
      const r = await fetch(API + "/coinflip");
      const d = await r.json();
      document.getElementById("result").innerText = d.result;
    }

    async function roulette() {
      const r = await fetch(API + "/roulette");
      const d = await r.json();
      document.getElementById("result").innerText = d.number + " " + d.color;
    }

    async function slots() {
      const r = await fetch(API + "/slots");
      const d = await r.json();
      document.getElementById("result").innerText = d.spin.join(" ");
    }

    async function blackjack() {
      const r = await fetch(API + "/blackjack");
      const d = await r.json();
      document.getElementById("result").innerText =
        "Player: " + d.player +
        " Dealer: " + d.dealer +
        " Winner: " + d.winner;
    }
  </script>
</body>
</html>

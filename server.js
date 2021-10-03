const {
  game1_header,
  game1_footer,
  game1_content,
} = require("./games/game1.js");
const express = require("express");
const app = express();
const port = process.env.PORT || "8000";
app.use(express.static("games"));

app.get("/", (req, res) => {
  res.send(
    'Welcome please append "/game{number}" to the route to go to the respective game'
  );
});

app.get("/game1", (req, res) => {
  let query = req.query.query;
  if (query && query.length > 0) {
    query = query.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let message = "Sorry, no results were found for <b>" + query + "</b>.";
    message += " <a href='?'>Try again</a>.";
    res.send(game1_header + message + game1_footer);
  } else {
    res.send(game1_header + game1_content + game1_footer);
  }
});

app.get("/game2", (req, res) => {
  res.sendFile(__dirname + "/games/game2.html");
});

app.get("/game3", (req, res) => {
  res.sendFile(__dirname + "/games/game3.html");
});

app.get("/game4", (req, res) => {
  const query = req.query.timer;
  if (query && parseInt(query) !== NaN) {
    res.sendFile(__dirname + "/games/timer.html");
  } else res.sendFile(__dirname + "/games/game4.html");
});

app.get("/game5", (req, res) => {
  res.sendFile(__dirname + "/games/game5.html");
});

app.get("/game5/signup", (req, res) => {
  res.sendFile(__dirname + "/games/signup.html");
});

app.get("/game5/confirm", (req, res) => {
  res.sendFile(__dirname + "/games/confirm.html");
});

app.get(/game6/, (req, res) => {
  res.sendFile(__dirname + "/games/game6.html");
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

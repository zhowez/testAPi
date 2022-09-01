const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/home", (_req, res) => {
  res.status(200);
  console.log("The API was HIT!!!");
  res.send("The proxy worked!!!");
});

app.post("/api/post", (req, res) => {
  console.log(req.body);
  if (req.body.work == "please") {
    res.status(200);
    res.send("it worked");
  } else {
    res.status(300);
    res.send("nope");
  }
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});

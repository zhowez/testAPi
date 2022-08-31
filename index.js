const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (_req, res) => {
  res.status(200);
  console.log("The API was HIT!!!");
  res.send("The proxy worked!!!");
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});

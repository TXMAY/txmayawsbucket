const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!!! yeeeeeeee");
});

app.get("/goodbye", (req, res) => {
  res.send("Good Bye!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

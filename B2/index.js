//install express
const express = require("express");
const app = express();
const port = 3000;

app.get("/tin-tuc", (req, res) => {
  return res.send("hello!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
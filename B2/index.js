//install express
//install nodemon
//install morgan
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
app.use(morgan("combined"));
app.get("/tin-tuc", (req, res) => {
  return res.send("hello!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

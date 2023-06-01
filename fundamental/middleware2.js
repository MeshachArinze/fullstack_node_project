const debug = require('debug')('express')
const express = require("express");
const app = express();
const morgan = require("morgan");

const hostname = "127.0.0.1";
const port = 3000;

debug()

//  req => middleware => res

// app.use([logger, authorize])
// app.use(express.static('./public'))
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.set("trust proxy", (ip) => {
  if (ip === "127.0.0.1" || ip === "123.123.123.123")
    return true; // trusted IPs
  else return false;
});

app.use("*", (req, res) => {
  res.sendStatus(404).send('page not found');
});

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

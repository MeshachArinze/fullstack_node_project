const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 3000;

const people = require("./router_people");
const auth = require("./router_auth");

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

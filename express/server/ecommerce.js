const express = require("express");
const path = require("path");


const hostname = "127.0.0.1";
const port = 3000;

const app = express();

// app.use(express.static("./public"));
app.use(express.static("./ecommerce"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./ecommerce/index.html"));
});

app.use("/", (req, res) => {
  res.status(201).sendFile(path.resolve(__dirname, "./ecommerce/styles.css"));
});

app.use("/", (req, res) => {
  res.status(201).sendFile(path.resolve(__dirname, "./ecommerce/nav.js"));
});

app.use("/", (req, res) => {
  res.status(201).sendFile(path.resolve(__dirname, "./ecommerce/home.js"));
});

app.use("/", (req, res) => {
  res.status(201).sendFile(path.resolve(__dirname, "./ecommerce/product.js"));
});

app.use("/", (req, res) => {
  res.status(201).sendFile(path.resolve(__dirname, "./ecommerce/footer.js"));
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

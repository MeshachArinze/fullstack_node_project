const express = require('express');
const app = express()
const path = require('path');

const hostname = "127.0.0.1";
const port = 3000;

app.use(express.static("./netflix_clone/public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./netflix_clone/index.html"));
});

app.use("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./netflix_clone/about.html"));
});

app.use("/express/server/netflix_clone/public/img", (req, res) => {
  res
    
    .sendFile(
      path.resolve(__dirname, "./netflix_clone/public/img/nxt.png")
    );
});
app.use("/express/server/netflix_clone/public/img", (req, res) => {
  res
    
    .sendFile(
      path.resolve(__dirname, "./netflix_clone/public/img/logo.png")
    );
});

app.use("/express/server/netflix_clone/public/img", (req, res) => {
  res
    
    .sendFile(
      path.resolve(__dirname, "./netflix_clone/public/img/poster.jpg")
    );
});

app.use("/express/server/netflix_clone/public/img", (req, res) => {
  res
    .status(201)
    .sendFile(
      path.resolve(__dirname, "./netflix_clone/public/img/pre.png")
    );
});

// app.use("/", (req, res) => {
//   res.status(201).sendFile(path.resolve(__dirname, "./ecommerce/home.js"));
// });

// app.use("/", (req, res) => {
//   res.status(201).sendFile(path.resolve(__dirname, "./ecommerce/product.js"));
// });

// app.use("/", (req, res) => {
//   res.status(201).sendFile(path.resolve(__dirname, "./ecommerce/footer.js"));
// });

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
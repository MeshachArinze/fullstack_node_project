const express = require("express");
const app = express();


const hostname = "127.0.0.1";
const port = 3000;

app.use(express.json());
app.post("/slack-webhook", (req, res) => {
  const { text, user, channel } = req.body;
  console.log(`New message from ${user} in channel ${channel}: "${text}"`);
  res.status(200).end();
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

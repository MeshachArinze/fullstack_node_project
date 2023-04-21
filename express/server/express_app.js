const express = require('express')
const path = require('path')

const hostname = "127.0.0.1";
const port = 3000;

const app = express()

app.use(express.static("./public"));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './cloth_web_app/index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
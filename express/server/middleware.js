const express = require('express')
const app = express()

const hostname = "127.0.0.1";
const port = 3000;

const logger = (req, res, next) => {
    const method = req.methodconst 
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)

    next()
}

app.get('/', logger, (req, res) => {
    res.send('Home');
})

app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
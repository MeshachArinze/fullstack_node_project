const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html'})

        res.write('<h1>hello ekene')
        res.end()
    } else if (url === '/anout' ) {
        res.writeHead(200, { "content-type": "text/html" });

        res.write("<h1>hello meshach");
        res.end();
    }

    else {
        res.writeHead(404, { "content-type": "text/html" });
        
        res.write("<h1>page mot foumd</h1>");
        res.end();
    }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


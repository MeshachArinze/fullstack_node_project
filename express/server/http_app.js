const http = require("http");
const { readFileSync } = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

// get all files

const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeContact = readFileSync("./navbar-app/contact.html");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");


const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/" ) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();


    
  } else if (url === "/contact.html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homeContact);
    res.end();

   // image/logo

  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  } // image/logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }
  // logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });

    res.write("<h1>page mot foumd</h1>");
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

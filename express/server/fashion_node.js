const http = require("http");
const { readFileSync } = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

// get all files

const homePage = readFileSync("./cloth_web_app/index.html");
const homeStyles = readFileSync("./cloth_web_app/styles.css");
const homeProduct = readFileSync("./cloth_web_app/product.html");
const homeContact = readFileSync("./cloth_web_app/contact.html");
const homeImage = readFileSync("./cloth_web_app/logo.svg");
const homeLogic = readFileSync("./cloth_web_app/browser-app.js");


const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } 
  
  else if (url === "/product.html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homeProduct);
    res.end();

    // image/logo
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

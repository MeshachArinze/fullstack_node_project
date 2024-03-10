const http = require("http");
const { readFileSync } = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

// get all files

const homeHtml = readFileSync("./JShopCart/product.html");
const homeProductCss = readFileSync("./JShopCart/product.css");
const homeProductJs = readFileSync("./JShopCart/product.js");
const homeImg1 = readFileSync("./JShopCart/food/food1.jpg");
const homeImg2 = readFileSync("./JShopCart/food/food2.jpg");
const homeImg3 = readFileSync("./JShopCart/food/food3.jpg");
const homeImg4 = readFileSync("./JShopCart/food/food4.jpg");
const homeImg5 = readFileSync("./JShopCart/food/food5.jpg");
const homeImg6 = readFileSync("./JShopCart/food/food6.jpg");
const homeImg7 = readFileSync("./JShopCart/food/food7.jpg");
const homeImg8 = readFileSync("./JShopCart/food/food8.jpg");
const homeJson = readFileSync("./JShopCart/product.json");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homeHtml);
    res.end();
  }   else if (url === "/product.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeProductCss);
    res.end();
  } // image/logo
  else if (url === "/food1.jpg") {
    res.writeHead(200, { "content-type": "image/jpeg" });
    res.write(homeImg1);
    res.end();
  }
  else if (url === "/food2.jpg") {
    res.writeHead(200, { "content-type": "image/jpeg" });
    res.write(homeImg2);
    res.end();
  }
  else if (url === "/food3.jpg") {
    res.writeHead(200, { "content-type": "image/jpeg" });
    res.write(homeImg3);
    res.end();
  }
  else if (url === "/food4.jpg") {
    res.writeHead(200, { "content-type": "image/jpeg" });
    res.write(homeImg4);
    res.end();
  }
  else if (url === "/food5.jpg") {
    res.writeHead(200, { "content-type": "image/jpeg" });
    res.write(homeImg5);
    res.end();
  }
  else if (url === "/food6.jpg") {
    res.writeHead(200, { "content-type": "image/jpeg" });
    res.write(homeImg6);
    res.end();
  }
  else if (url === "/food7.jpg") {
    res.writeHead(200, { "content-type": "image/jpeg" });
    res.write(homeImg7);
    res.end();
  }

  else if (url === "/food8.jpg") {
    res.writeHead(200, { "content-type": "image/jpeg" });
    res.write(homeImg8);
    res.end();
  }
  // logic
  else if (url === "/product.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeProductJs);
    res.end();
  }
   
  else if (url === "/product.json") {
    res.writeHead(200, { "content-type": "text/json" });
    res.write(homeJson);
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

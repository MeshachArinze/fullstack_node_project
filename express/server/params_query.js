// import all existing modules from node_modules

const express = require("express");
const app = express();

const { products } = require("../data");

const hostname = "127.0.0.1";
const port = 3000;

app.get("/", (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
}); // get the first url match

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  const { productId } = req.params;

  //check if a product exist inside our array

  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );

  //check if a product does not exist inside our array

  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }

  return res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//product section

const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});
export const userModel = mongoose.model("product", schemaProduct);

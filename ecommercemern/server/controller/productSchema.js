//product section
import mongoose from "mongoose";
const { Schema } = mongoose;

const schemaProduct = new Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});
export const productModel = mongoose.model("product", schemaProduct);

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import productsModels from "../models/productsModels.js";
import { createProducts, getProductsById, gettingProducts } from "../controllers/productsControler.js";

dotenv.config()
const app = express()
const router = express.Router()
app.use(express.json())

// post -> create products
router.post("/", createProducts)

// get -> getting(reading all products)
router.get("/", gettingProducts)

// get product by id
router.get("/:id", getProductsById)


// put -> updating the product by id
router.put("/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(422).json({
      "error": "Invalid Mongo ID"
    })
  }
  if (!await product.exists({ _id: req.params.id })) {
    return res.status(422).json({
      "error": "Invalid product ID"
    })
  }
  try {
    const product = await productsModels.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(201).json({
      product
    })
  } catch (error) {
    return res.status(422).json({
      "error": error.message
    })
  }
})

// delete -> delete by id
router.delete("/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(422).json({
      "error": "Invalid Mongo ID"
    })
  }
  if (!await product.exists({ _id: req.params.id })) {
    return res.status(422).json({
      "error": "Invalid product ID"
    })
  }
  try {
    const product = await productsModels.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.status(200).json({
      message: "Product deleted successfully"
    });

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
});


export default router;
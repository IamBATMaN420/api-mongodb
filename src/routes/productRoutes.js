import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import productsModels from "./models/productsModels.js";

dotenv.config()
const app = express()
const router = express.Router()
app.use(express.json())

router.post("/api/products", async (req, res) => {
  try {

    if (!req.body.name) {
      return res.status(422).json({
        "error": "name feild is not given"
      })
    }
    if (!req.body.description) {
      return res.status(422).json({
        "error": "description feild is not given"
      })
    }
    if (!req.body.price) {
      return res.status(422).json({
        "error": "price feild is not given"
      })
    }
    if (!req.body.quantity) {
      return res.status(422).json({
        "error": "quantity feild is not given"
      })
    }
    if (!req.body.active) {
      return res.status(422).json({
        "error": "active feild is not given"
      })
    }
    if (!req.body.catagory) {
      return res.status(422).json({
        "error": "catagory feild is not given"
      })
    }

    const product = await productsModels.create(req.body)
    res.status(201).json(product)
  }

  catch (error) {
    return res.status(501).json({
      "error": error.message
    })
  }
})

// get -> getting(reading all products)
router.get("/api/products", async (req, res) => {
  try {
    const product = await productsModels.find().select("_id name price")
    return res.status(201).json(product)
  } catch (error) {
    return res.status(422).json({
      "error": "Invalid product ID"
    })
  }
})

// get product by id
router.get("/api/products/:id", async (req, res) => {
  try {
    const product = await productsModels.findById(req.params.id)
    return res.status(201).json(product)
  } catch (error) {
    return res.status(422).json({
      "error": "Invalid product ID"
    })
  }
})


// put -> updating the product by id
router.put("/api/products/:id", async (req, res) => {
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
router.delete("/api/products/:id", async (req, res) => {
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



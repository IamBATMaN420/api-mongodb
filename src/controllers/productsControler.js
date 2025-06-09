import mongoose from "mongoose";
import productsModels from "../models/productsModels.js";
import express from "express"
import catagoryModels from "../models/catagoryModels.js";
const app = express()
app.use(express.json())
export const createProducts = async (req, res) => {
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
    } else if (!await catagoryModels.findById(req.body.catagory)) {
      return res.status(422).json({
        "error": "catagory feild is not  catagory DB"
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
}

export const getProducts = async (req, res) => {
  try {
    const products = await productsModels.find()
      .select("-__v")
      .populate({ path: "catagory", select: "_id name" })

    return res.status(200).json(products)
  } catch (error) {
    return res.status(422).json({
      "error": "Invalid product ID"
    })
  }
}

export const getProductsById = async (req, res) => {
  try {
    const product = await productsModels.findById(req.params.id)
      .select("-__v")
      .populate({ path: "catagory", select: "_id name" })
    return res.status(201).json(product)
  } catch (error) {
    return res.status(422).json({
      "error": "Invalid product ID"
    })
  }
}

export const getProductByCatagory = async (req, res) => {
  try {

    const product = await productsModels.find({ catagory: req.params.catagoryId })
    return res.status(201).json(product)
  } catch (error) {
    return res.status(422).json({
      "error": "Invalid product ID"
    })
  }
}

export const updateProduct = async (req, res) => {
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
}

export const deleteProduct = async (req, res) => {
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
}
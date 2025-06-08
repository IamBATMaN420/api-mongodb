import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import productsModels from "./models/productsModels.js";
dotenv.config()

const app = express()

app.use(express.json())

const mongoURI = process.env.mongo_string_url

mongoose.connect(mongoURI)

mongoose.connection.on("connected", () => {
  console.log(`Mongo Db is connected`)
  app.listen(5000, () => {
    console.log(`server is running on 5000`)
  })
})


mongoose.connection.on("error", (error) => {
  console.log("error is ", error)
})

app.post("/api/products", async (req, res) => {
  try {
    const product = await productsModels.create(req.body)
    res.status(201).json(product)
  } catch (error) {
    return res.status(501).json({
      "error": error.message
    })
  }
})



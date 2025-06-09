import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import productRouter from "./routes/productRoutes.js";
import catagoryRouter from "./routes/catagoryRoutes.js";

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

app.use("/api/products", productRouter);
app.use("/api/catagories", catagoryRouter)
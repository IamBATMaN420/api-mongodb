import express from "express";
import { createProducts, deleteProduct, getProducts, getProductsById, updateProduct } from "../controllers/productsControler.js";

const router = express.Router()

// post -> create products
router.post("/", createProducts)

// get -> getting(reading all products)
router.get("/", getProducts)

// get product by id
router.get("/:id", getProductsById)


// put -> updating the product by id
router.put("/:id", updateProduct)

// delete -> delete by id
router.delete("/:id",deleteProduct);


export default router;
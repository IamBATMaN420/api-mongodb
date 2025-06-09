import express from "express";
import { createProducts, deleteProduct, getProductByCatagory, getProducts, getProductsById, updateProduct } from "../controllers/productsControler.js";

const router = express.Router()

// post -> create products
router.post("/", createProducts)

// get -> getting(reading all products)
router.get("/", getProducts)

// get product by id
router.get("/:id", getProductsById)

router.get("/catagory/:catagoryId", getProductByCatagory)

// put -> updating the product by id
router.put("/:id", updateProduct)

// delete -> delete by id
router.delete("/:id",deleteProduct);


export default router;
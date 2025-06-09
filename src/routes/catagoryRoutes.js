import express from "express";
import { createCatagory, deleteCatagory, getAllCatagory, getCatgoryById, updateCatagory } from "../controllers/catagoryControler.js";

const router = express.Router()


router.post("/", createCatagory)
router.get("/", getAllCatagory)
router.get("/:id", getCatgoryById)
router.put("/:id", updateCatagory)
router.delete("/:id", deleteCatagory)

export default router
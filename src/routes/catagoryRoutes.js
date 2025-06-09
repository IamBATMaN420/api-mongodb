import express from "express";
import { createCatagory, getAllCatagory, getCatgoryById, updateCatagory } from "../controllers/catagoryControler.js";

const router = express.Router()


router.post("/", createCatagory)
router.get("/", getAllCatagory)
router.get("/:id", getCatgoryById)
router.put("/:id", updateCatagory)

export default router
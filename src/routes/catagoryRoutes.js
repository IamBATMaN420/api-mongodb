import express from "express";
import { createCatagory, getAllCatagory } from "../controllers/catagoryControler.js";

const router = express.Router()

router.post("/", createCatagory)
router.get("/", getAllCatagory)
router.get("/:id", getCatgoryById)

export default router
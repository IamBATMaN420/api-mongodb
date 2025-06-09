import express from "express";
import { createCatagory, getAllCatagory, getCatgoryById } from "../controllers/catagoryControler.js";

const router = express.Router()


router.post("/", createCatagory)
router.get("/", getAllCatagory)
router.get("/:id", getCatgoryById)

export default router
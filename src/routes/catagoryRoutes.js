import express from "express";
import { createCatagory } from "../controllers/catagoryControler.js";

const router = express.Router()

router.post("/", createCatagory)
router.get("/", getAllCatagory)

export default router
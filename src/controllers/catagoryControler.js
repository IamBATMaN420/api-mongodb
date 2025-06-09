import catagoryModels from "../models/catagoryModels.js";
import express from "express"
import mongoose from "mongoose";
const app = express()
app.use(express.json())
export const createCatagory = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(422).json({
        "message": "name feild is required"
      })
    }
    const newCatagory = await catagoryModels.create(req.body)
    return res.status(201).json(newCatagory)

  } catch (error) {
    return res.status(500).json({
      "error": error.message
    })
  }
}

export const getAllCatagory = async (req, res) => {
  try {
    const catagory = await catagoryModels.find().select("id name")
    return res.status(201).json(catagory)
  } catch (error) {
    return res.status(500).json({
      "error": error.message
    })
  }
}

export const getCatgoryById = async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(404).json({
      "error": "invalid mongo ID"
    })
  }
  try {
    const catagory = await catagoryModels.findById(req.params.id).select('-__v')
    if (!catagory) {
      return res, status(404).json({
        "error": "bhai catagory nai"
      })
    }
    return res.status(201).json(catagory)
  } catch (error) {
    return res.status(500).json({
      "error": error.message
    })
  }
}

export const updateCatagory = async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(404).jdon({
      "error":"galat mongo ID hain bhai"
    })
  }
  try {
    const updatedCatagory = await catagoryModels.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.status(201).json(updateCatagory)
  } catch (error) {
    return res.status(404).json({
      "error": error.message
    })
  }
}
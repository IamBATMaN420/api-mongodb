import catagoryModels from "../models/catagoryModels.js";

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
    const catagory = catagoryModels.find().select("id name")
    return res.status(201).json(catagory)
  } catch (error) {
    return res.status(500).json({
      "error": error.message
    })
  }
}

export const getCatgoryById = async(req,res) => {
  try {
    
  } catch (error) {
    return res.status(500).json({
      "error":error.message
    })
  }
}
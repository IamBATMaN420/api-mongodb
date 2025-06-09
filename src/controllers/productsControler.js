export const createProducts = async (req, res) => {
  try {

    if (!req.body.name) {
      return res.status(422).json({
        "error": "name feild is not given"
      })
    }
    if (!req.body.description) {
      return res.status(422).json({
        "error": "description feild is not given"
      })
    }
    if (!req.body.price) {
      return res.status(422).json({
        "error": "price feild is not given"
      })
    }
    if (!req.body.quantity) {
      return res.status(422).json({
        "error": "quantity feild is not given"
      })
    }
    if (!req.body.active) {
      return res.status(422).json({
        "error": "active feild is not given"
      })
    }
    if (!req.body.catagory) {
      return res.status(422).json({
        "error": "catagory feild is not given"
      })
    }

    const product = await productsModels.create(req.body)
    res.status(201).json(product)
  }

  catch (error) {
    return res.status(501).json({
      "error": error.message
    })
  }
}

export const gettingProducts = async (req, res) => {
  try {
    const product = await productsModels.find().select("_id name price")
    return res.status(201).json(product)
  } catch (error) {
    return res.status(422).json({
      "error": "Invalid product ID"
    })
  }
}
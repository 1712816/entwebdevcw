import Product from '../models/product.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'

/**
 * Load product and append to req.
 */
const productByID = async (req, res, next, id) => {
  try {
    let product = await Product.findById(id)
    if (!product)
      return res.status('400').json({
        error: "Product not found"
      })
    req.profile = product
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve product"
    })
  }
}

const list = async (req, res) => {
  try {
    let products = await Product.find().select('name price quantity')
    res.json(products)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

export default {
  productByID,
  list
}

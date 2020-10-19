const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()

const Product = require('../models/productModel')

// @desc    Fetch all products
// @route   Get /api/products
// @access  Public
router.get('/', asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({})
    res.json(products)
  } catch (error) {
    throw new Error('Products not found')
  }

}))

// @desc    Fetch single product
// @route   Get /api/product/:id
// @access  Public
router.get('/:id', asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.json(product)
  } catch (error) {
    res.status(404)
    throw new Error('Product not found')
  }
}))

module.exports = router
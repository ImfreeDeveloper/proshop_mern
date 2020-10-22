const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')

// @desc    Fetch all products
// @route   Get /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({})
    res.json(products)
  } catch (error) {
    throw new Error('Products not found')
  }
})

// @desc    Fetch single product
// @route   Get /api/product/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.json(product)
  } catch (error) {
    res.status(404)
    throw new Error('Product not found')
  }
})

module.exports = { getProducts, getProductById }
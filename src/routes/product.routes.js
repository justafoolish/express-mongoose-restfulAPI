const express = require('express');
const userRoutes = express.Router()
const ProductController = require('../controllers/ProductController')

/** GET: /api/product - get list products */
userRoutes.get('/', ProductController.getListProduct)

module.exports = userRoutes
const express = require('express');
const userRoutes = express.Router()
const ProductController = require('../controllers/ProductController')

userRoutes

    /** GET: /api/product - get list products */
    .get('/', ProductController.getListProduct)

    /** POST: /api/product - insert new product */
    .post('/', ProductController.storeProduct)

    // .patch('/:id', ProductController.updateProduct)

    // .delete('/:id', ProductController.deleteProduct)

module.exports = userRoutes
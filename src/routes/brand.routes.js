const express = require('express');
const brandRoutes = express.Router()

const BrandController = require('../controllers/BrandController')

brandRoutes

    /** GET: /api/product - Get list products */
    .get('/', BrandController.getListBrand)

    /** POST: /api/category - Create new category */
    .post('/', BrandController.storeBrand)

module.exports = brandRoutes
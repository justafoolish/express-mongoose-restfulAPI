const express = require('express');
const collectionRoutes = express.Router()

const CollectionController = require('../controllers/CollectionController')

collectionRoutes

    /** GET: /api/product - Get list products */
    .get('/', CollectionController.getListCollection)

    /** POST: /api/category - Create new category */
    .post('/', CollectionController.storeCollection)

module.exports = collectionRoutes
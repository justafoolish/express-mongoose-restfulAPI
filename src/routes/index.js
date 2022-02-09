const expressRoute = require('express').Router()

const userRoutes = require('./user.routes')
const productRoutes = require('./product.routes')
const brandRoutes = require('./brand.routes')

expressRoute

    /** Endpoint: /api/user */
    .use('/user', userRoutes)

    /** Endpoint: /api/product */
    .use('/product', productRoutes)

    /** Endpoint: /api/brand */
    .use('/brand', brandRoutes)

module.exports = expressRoute
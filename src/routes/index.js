const userRoutes = require('./user.routes')
const productRoutes = require('./product.routes')
const brandRoutes = require('./brand.routes')

const route = app => {

    app.use('/api/user', userRoutes)

    app.use('/api/product', productRoutes)

    app.use('/api/brand', brandRoutes)
}

module.exports = route
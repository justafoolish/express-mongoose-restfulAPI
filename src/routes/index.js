const userRoutes = require('./user.routes')
const productRoutes = require('./product.routes')

const route = app => {
    app.use('/api/user', userRoutes)
    app.use('/api/product', productRoutes)
    app.use('/api/cart', () => { })
}

module.exports = route
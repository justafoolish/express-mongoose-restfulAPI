const userRoutes = require('./user.routes')
const productRoutes = require('./product.routes')
const collectionRoutes = require('./collection.routes')

const route = app => {

    app.use('/api/user', userRoutes)

    app.use('/api/product', productRoutes)

    app.use('/api/collection', collectionRoutes)
}

module.exports = route
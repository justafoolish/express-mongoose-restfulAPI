const ProductModel = require('../models/product.model')

class ProductController {
    getListProduct(req, res, next) {
        const pagination = {}
        let productQuery = ProductModel.find()

        if (req.hasOwnProperty('_page')) {
            productQuery.skip(req.body._page)
            pagination.page = req.body._page
        }

        if (req.hasOwnProperty('_limit')) {
            productQuery.limit(req.query._limit)
            pagination.limit = req.query._limit
        }

        if (req.hasOwnProperty('_sort'))
            productQuery.sort({
                [req.query._sort]: req.query._sort === 'asc' ? 1 : -1
            })
        
        /**
         * TODO: filter
         * //Filter by key
         * {key}_like = {value}
         * 
         * //search all by value
         * _q={value}
         */


        productQuery
            .then(data => {
                if (pagination) pagination.totals = data.length

                return res.json({
                    data,
                    pagination
                })
            })
            .catch(next)
    }
}

module.exports = new ProductController;
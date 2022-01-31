const ProductModel = require('../models/product.model');

class ProductController {
    getListProduct(req, res, next) {

        ProductModel.find({})
            .then(data => res.json({
                data
            }))
            .catch(next)
    }

    async storeProduct(req, res, next) {
        // //create new collection model
        // const newProduct = new ProductModel({
        //     name: req.body.name.trim(),
        // })

        // //save data
        // newProduct
        //     .save()
        //     .then(savedCollection => res.json({
        //         success: true,
        //         data: savedCollection
        //     }))
        //     .catch(next)
        res.send('ko')
    }

    updateProduct(req, res, next) {

    }

    deleteProduct(req, res, next) {

    }


}

module.exports = new ProductController;
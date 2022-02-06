const ProductModel = require('../models/product.model');

class ProductController {
    getListProduct(req, res, next) {

        ProductModel.find({})
            .then(data => res.json({
                success: true,
                data
            }))
            .catch(next)
    }

    async storeProduct(req, res, next) {
        //create new collection model
        // const newProduct = new ProductModel({
        //     name: req.body.name.trim(),
        //     brand: req.body.brand.trim(),
        //     image: req.body.image,
        //     price: req.body.price,
        //     quantity: req.body.quantity
        // })

        //save data
        // newProduct
        //     .save()
        //     .then(savedCollection => res.json({
        //         success: true,
        //         data: savedCollection
        //     }))
        //     .catch(next)
        console.log(req.body);
    }

    updateProduct(req, res, next) {

    }

    deleteProduct(req, res, next) {

    }


}

module.exports = new ProductController;
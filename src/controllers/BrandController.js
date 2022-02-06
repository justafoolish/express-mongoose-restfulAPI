const BrandModel = require('../models/Brand.model')

class BrandController {
    getListBrand(req, res, next) {
        BrandModel
            .find()
            .then(data => res.json({
                success: true,
                data
            }))
            .catch(next)
    }
    async storeBrand(req, res, next) {
        //check is Brand duplicate
        const isBrandExists = await BrandModel.findOne({ name: req.body.name.trim() })
        if (isBrandExists) return res.status(400).json({
            success: false,
            message: 'Brand already exists'
        })

        //create new Brand model
        const newBrands = new BrandModel({
            name: req.body.name.trim(),
        })

        //save data
        newBrands
            .save()
            .then(savedBrand => res.json({
                success: true,
                data: savedBrand
            }))
            .catch(next)
    }
}

module.exports = new BrandController
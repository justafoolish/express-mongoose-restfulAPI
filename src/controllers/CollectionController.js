const CollectionModel = require('../models/collection.model')

class CollectionController {
    getListCollection(req, res, next) {
        res.send('get list')
    }
    async storeCollection(req, res, next) {
        //check is collection duplicate
        const isCollectionExists = await CollectionModel.findOne({ name: req.body.name.trim() })
        if (isCollectionExists) return res.status(400).json({
            success: false,
            message: 'Collection already exists'
        })

        //create new collection model
        const newCollections = new CollectionModel({
            name: req.body.name.trim(),
        })

        //save data
        newCollections
            .save()
            .then(savedCollection => res.json({
                success: true,
                data: savedCollection
            }))
            .catch(next)
    }
}

module.exports = new CollectionController
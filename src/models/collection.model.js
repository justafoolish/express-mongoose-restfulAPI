const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const CollectionSchema = new mongoose.Schema({
    name: {
        type: String,
        max: 255,
        trim: true,
    },
    slug: {
        type: String,
        slug: 'name',
        unique: true,
        trim: true,
    },
    active: {
        type: Boolean,
        default: true
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products'
        }
    ]
}, { timestamps: true })

module.exports = mongoose.model('Collections', CollectionSchema)
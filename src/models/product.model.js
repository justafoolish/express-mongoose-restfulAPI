const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255
    },
    slug: {
        type: String,
        slug: slug,
        unique: true
    },
    category: {
        type: String,
        required: true,
    },
    subcategory: {
        type: String,
        model: [{
            type: String,
            color: [{
                name: String,
                image: [{
                    type: String,
                }]
            }],
            size: [{
                val: String,
                price: {
                    type: Number,
                    required: true,
                    
                }
            }]
        }]
    },
    description: {
        type: String,
        max: 255
    },
    sold: {
        type: Number,
        default: 0,
    }
}, { timestamps: true });

module.exports = mongoose.model('product', productSchema);
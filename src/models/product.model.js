const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug)

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255
    },
    slug: {
        type: String,
        slug: 'name',
        unique: true
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brands',
    },
    image: [
        { type: String },
    ],
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        max: 255
    },
    quantity: {
        type: Number,
        min: 0,
        required: true,
    },
    sold: {
        type: Number,
        min: 0,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Products', ProductSchema);
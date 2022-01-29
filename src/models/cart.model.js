const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({

}, { timestamps: true });

module.exports = mongoose.model('cart', cartSchema);
const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({

}, { timestamps: true });

module.exports = mongoose.model('Carts', CartSchema);
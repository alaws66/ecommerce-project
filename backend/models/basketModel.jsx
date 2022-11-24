const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const basketSchema = new Schema({
  products: [{
    _id: false,
    product_id: mongoose.ObjectId,
    size: mongoose.Mixed,
    colour: String,
    price: Number,
    discount: Number,
    quantity: Number
  }]
}, { timestamps: true });

module.exports = mongoose.model('Baskets', basketSchema);
const mongoose = require('mongoose');

const { Schema, Mixed } = mongoose;

const basketSchema = new Schema({
  user_id: Schema.Types.ObjectId,
  products: [{
    _id: false,
    product_id: {
      type: Schema.Types.ObjectId,
      ref: 'Products'
    },
    item_id: String,
    size: Mixed,
    colour: String,
    price: Number,
    discount: Number,
    quantity: Number
  }]
});

module.exports = mongoose.model('Baskets', basketSchema);
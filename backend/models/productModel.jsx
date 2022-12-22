const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String
  },
  stock: [{
    quantity: Number
  }]
});

module.exports = mongoose.model('Products', productSchema);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String
  }
});

module.exports = mongoose.model('Products', productSchema);
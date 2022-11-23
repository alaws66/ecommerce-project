const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const basketSchema = new Schema({
  colour: {
    type: String
  },
  products: []
}, { timestamps: true });

module.exports = mongoose.model('Baskets', basketSchema);
const express = require('express');
const productModel = require('../models/productModel.jsx');
const mongoose = require('mongoose');

const router = express.Router();

// GET single product
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such product'});
  }

  const product = await productModel.findById(id);

  if (!product) {
    return res.status(404).json({error: 'No such product'})
  }

  res.status(200).json(product);
});

module.exports = router;
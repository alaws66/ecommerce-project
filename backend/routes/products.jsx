const express = require('express');
const productModel = require('../models/productModel.jsx');
const orderModel = require('../models/orderModel.jsx');
const mongoose = require('mongoose');

const router = express.Router();

// get 3 most popular products in 24 hour time period
router.get('/popular', async (req, res) => {
  const products = await orderModel.aggregate([
    {
      "$match": {
        $expr: {
          $gte: [
            "$purchase_date",
            { "$subtract": [ "$$NOW", 86400000 ] }
          ]
        }
      }
    },
    { $unwind: '$products' },
    { 
      $group: { 
        _id: { 
          'product_id': "$products.product_id", 
          'colour': "$products.colour" 
        },
        total: { $sum:  '$products.quantity' }
      }
    },
    { $sort: { total: -1 } },
    { $limit: 3 },
    { 
      $project: { 
        _id: 0,
        product_id: '$_id.product_id', 
        colour: '$_id.colour', 
        total: 1 
      } 
    }
  ]);

  res.status(200).json(products);
});

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
const express = require('express');
const productModel = require('../models/productModel.jsx');

const router = express.Router();

// GET single product
router.get('/:cat', async (req, res) => {
  const products = await productModel.aggregate([ 
    { $unwind: "$stock" },
    { $group: 
      { 
        _id: {
          product_id: "$_id",
          title: "$title",
          colour: "$stock.colour"
        },
        max_stock: { $max: "$stock.quantity" },
        max_price: { $max: "$stock.price" },
        discount: { $max: "$stock.discount" }
      } 
    },
    { $addFields: 
      { min_price: 
        { $subtract: 
          [ "$max_price", { $divide: [ { $multiply: ["$max_price", "$discount"] }, 100 ] } ] 
        }
      } 
    },
    { $project: { _id: 0, product_id: "$_id.product_id", title: '$_id.title', colour: '$_id.colour', max_stock: 1, max_price: 1, discount: 1, min_price: 1 } }
  ]);

  res.status(200).json(products);
});

module.exports = router;
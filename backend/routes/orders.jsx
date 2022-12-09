const express = require('express');
const mongoose = require('mongoose');
const basketModel = require('../models/basketModel.jsx');
const orderModel = require('../models/orderModel.jsx');
const productModel = require('../models/productModel.jsx');

const router = express.Router();

router.post('/checkout/:user_id/:id', async (req, res) => {
  const { user_id, id } = req.params;
  const basket = req.body;

  if (!user_id) {
    return res.status(404).json({error: 'No such order'});
  }

  if (!basket.length) {
    return res.status(404).json({error: 'No such order'});
  }

  // create order
  await orderModel.create({
    products: basket,
    purchase_date: new Date(),
    user_id
  });

  // remove products from basket
  await basketModel.findByIdAndUpdate(id, { products: [] });

  // update product quantity
  for (const item of basket) {
    await productModel.updateOne(
      { _id: item.product_id },
      {
        $inc: {
          'stock.$[item].quantity': -item.quantity
        }
      },
      {
        arrayFilters: [{
          'item.colour': item.colour,
          'item.size': item.size
        }]
      }  
    );
  }

  res.status(200).json({ message: 'Order Created' });
});

module.exports = router;
const express = require('express');
const mongoose = require('mongoose');
const basketModel = require('../models/basketModel.jsx');
// const orderModel = require('../models/orderModel.jsx');

const router = express.Router();

router.post('/checkout/:user_id', async (req, res) => {
  const { user_id } = req.params;

  if (!user_id) {
    return res.status(404).json({error: 'No such order'});
  }

  const checkout = await basketModel.aggregate([
    { 
      $match: { user_id: mongoose.Types.ObjectId(user_id) }
    },
    {
      $addFields: { purchase_date: new Date() }
    },
    {
      $project: { _id: 0 }
    },
    { $merge: { into: "orders"}, }
  ]);

  await basketModel.updateOne(
    {user_id: user_id},
    {
      $set: {
        "products": []
      }
    }
  );

  if (!checkout) {
    return res.status(404).json({error: 'No such order'});
  }

  res.status(200).json(checkout);
});

module.exports = router;
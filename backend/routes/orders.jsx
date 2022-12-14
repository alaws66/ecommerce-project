const express = require('express');
const mongoose = require('mongoose');
const basketModel = require('../models/basketModel.jsx');
const orderModel = require('../models/orderModel.jsx');
const productModel = require('../models/productModel.jsx');

const router = express.Router();

// get one user's orders
router.get('/:user_id', async (req, res) => {
  const { user_id } = req.params;

  const orders = await orderModel.aggregate([
    { $match: { user_id : mongoose.Types.ObjectId(user_id) }},
  ]);

  if (!orders) {
    return res.status(404).json({error: 'Unable to get all orders'});
  }

  res.status(200).json(orders);
});

// get one order from one user's orders
router.get('/:user_id/:id', async (req, res) => {
  const { user_id, id } = req.params;  
  
  const order = await orderModel.aggregate([
    { $match: { user_id : mongoose.Types.ObjectId(user_id), _id : mongoose.Types.ObjectId(id) }},
    { $unwind: "$products" },
    { 
      $lookup: {
        from: "products",
        localField: "products.product_id",
        foreignField: "_id",
        as: "productLookup"
      }
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$productLookup", 0 ] }, "$$ROOT" ] } }
    },
    {
      $addFields: {
        image_collection: {
          $filter: {
            input: '$image_collection',
            as: 'image',
            cond: {
              $eq: [ "$$image.colour", "$products.colour" ]
            }
          }
        }
      }
    },
    { $unwind: "$image_collection" },
    {
      $replaceRoot: {
        newRoot: {
            $mergeObjects: ["$$ROOT", "$products"]
        }
      }
    },
    { 
      $project: { 
        title: 1, 
        images: "$image_collection.images", 
        purchase_date: 1, 
        size: 1,
        colour: 1,
        price: 1, 
        discount: 1, 
        quantity: 1 
      } 
    }
  ]);

  if (!order) {
    return res.status(404).json({error: 'Unable to get all orders'});
  }

  res.status(200).json(order);
});

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
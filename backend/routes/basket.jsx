const express = require('express');
const basketModel = require('../models/basketModel.jsx');
const mongoose = require('mongoose');

const router = express.Router();

// GET single basket
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such basket'});
  }

  const basket = await basketModel.aggregate([
    { $match: { user_id : new mongoose.Types.ObjectId(id) }},
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
    { $unwind: "$image_collection" },
    { 
      $redact: { 
        $cond: {
          if: { $eq: [ "$image_collection.colour", "$products.colour" ] },
          then: "$$KEEP",
          else: "$$PRUNE"
        } 
      } 
    },
    {
      $replaceRoot: {
        newRoot: {
            $mergeObjects: ["$$ROOT", "$products"]
        }
      }
    },
    { $project: { productLookup: 0, products: 0, stock: 0, sections: 0, category: 0, type: 0 } }
  ]);

  if (!basket) {
    return res.status(404).json({error: 'No such basket'})
  }

  res.status(200).json(basket);
});


// Update a basket
router.patch('/:user_id', async (req, res) => {
  // get user id from posted values
  const { id } = req.params;

  // lookup basket for user_id
  const basket = await basketModel.findOneAndUpdate(
    { user_id: id }, 
    { $push: { 
      products: {
        product_id: req.body.id,
        size: req.body.size,
        colour: req.body.colour,
        price: req.body.price,
        discount: req.body.discount,
        quantity: 1.0
      }
    }},
    {
      new: true
    }
  );

  // if basket doesn't exist create it for user id
  if (!basket) {}

  res.status(200).json(basket);
});


// delete item from basket
router.delete('/:user_id/:prod_id', async (req, res) => {
});

module.exports = router;
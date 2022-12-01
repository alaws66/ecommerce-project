const express = require('express');
const basketModel = require('../models/basketModel.jsx');
const mongoose = require('mongoose');

const router = express.Router();

// GET a single basket
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
    // { 
    //   $redact: { 
    //     $cond: {
    //       if: { $eq: [ "$image_collection.colour", "$products.colour" ] },
    //       then: "$$KEEP",
    //       else: "$$PRUNE"
    //     } 
    //   } 
    // },
    // { $match: { $expr: { $eq: [ "$image_collection.colour", "$products.colour" ] } } },
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

  // lookup a basket from user_id
  const productInBasket = await basketModel.findOneAndUpdate(
    { user_id: id }, 
    { $push: { 
      products: {
        product_id: req.body.id,
        item_id: req.body.item_id,
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

  // if a basket doesn't exist create it for user id
  if (!productInBasket) {}

  res.status(200).json(productInBasket);
});


// delete product from basket
router.delete('/:user_id/:item_id', async (req, res) => {
  const { user_id, item_id } = req.params;

  if (!user_id || !item_id) {
    return res.status(404).json({error: 'No such product'});
  }

  const productInBasket = await basketModel.findOneAndUpdate(
    { user_id: user_id },
    { $pull: { "products" : { "item_id": item_id } } }
    );

  if (!productInBasket) {
    return res.status(404).json({error: 'No such product'});
  }

  res.status(200).json(productInBasket);
});

module.exports = router;
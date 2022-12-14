const express = require('express');
const productModel = require('../models/productModel.jsx');

const router = express.Router();

router.get('/filter/:cat', async (req, res) => {
  const { cat } = req.params;

  const filter = await productModel.aggregate([
    { $unwind: "$sections" },
    { $match: { category: cat } },
    { 
      $group: {
        _id: "$sections",
        count: { $sum: 1 },
        category: { $first: "$category" }
      } 
    },
    { $sort: { count: -1 } }
  ]);

  if (!filter) {
    return res.status(404).json({error: 'No such product'})
  }

  res.status(200).json(filter);
});

// GET single category
router.get('/:cat', async (req, res) => {
  const { sections, sortBy } = req.query;
  const { cat } = req.params;

  const match = { category: cat };

  if (sections) {
    match.sections = { $in: sections.split(',') }
  }

  const discountCalc = {$subtract: [
    "$max_price", { $divide: [ { $multiply: ["$max_price", "$discount"] }, 100 ] } 
  ]}; 

  const aggregateQuery = [
    { $unwind: "$stock" },
    { $match: match },
    { $unwind: "$image_collection" },
    { 
      $redact: { 
        $cond: {
          if: { $eq: [ "$image_collection.colour", "$stock.colour" ] },
          then: "$$KEEP",
          else: "$$PRUNE"
        } 
      } 
    },
    { 
      $group: { 
        _id: {
          product_id: "$_id",
          colour: "$stock.colour"
        },
        title: { $first: "$title" },
        category: { $first: "$category" },
        max_stock: { $max: "$stock.quantity" },
        max_price: { $max: "$stock.price" },
        discount: { $max: "$stock.discount" },
        image: { $first: "$image_collection.images" }
      } 
    },
    { 
      $addFields: {
        min_price: {
          $cond: [ 
            discountCalc, discountCalc, "$max_price"
          ]
        }
      }
    },
    { 
      $project: {
        _id: "$_id.product_id", 
        colour: '$_id.colour', 
        image: { $first: "$image" },
        title: 1, 
        category: 1, 
        max_stock: 1,
        max_price: 1, 
        discount: 1, 
        min_price: 1  
      } 
    },
  ];

  if (sortBy === 'min_price') {
    aggregateQuery.push({ $sort: { min_price: 1 } });
  } else if (sortBy === 'max_price') {
    aggregateQuery.push({ $sort: { max_price: -1 } })
  } else if (sortBy === 'firstTitle') {
    aggregateQuery.push({ $sort: { title: 1 } })
  } else if (sortBy === 'lastTitle') {
    aggregateQuery.push({ $sort: { title: -1 } })
  }

  const products = await productModel.aggregate(aggregateQuery);

  res.json(products);
});

module.exports = router;
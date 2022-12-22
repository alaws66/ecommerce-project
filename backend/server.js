require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products.jsx');
const categoryRoutes = require('./routes/categories.jsx');
const basketRoutes = require('./routes/basket.jsx');
const orderRoutes = require('./routes/orders.jsx')

mongoose.set('strictQuery', false);

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/products', productRoutes);
app.use('/category', categoryRoutes);
app.use('/basket', basketRoutes);
app.use('/orders', orderRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to database and listening on port', process.env.PORT);
    })
  })
  .catch((error) => {
    console.log(error)
  })

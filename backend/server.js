require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products.jsx');
const categoryRoutes = require('./routes/categories.jsx');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
});

// routes
app.use('/products', productRoutes);
app.use('/category', categoryRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db and istening on port', process.env.PORT);
    })
  })
  .catch((error) => {
    console.log(error)
  })

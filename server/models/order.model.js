const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  customer: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Customer'
  }],
  food: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }],
  price: Number,
})
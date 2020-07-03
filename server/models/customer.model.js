const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  restaurants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  }]
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer

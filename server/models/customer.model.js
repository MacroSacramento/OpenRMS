const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
  },
  address: {
    type: String,
  }
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer

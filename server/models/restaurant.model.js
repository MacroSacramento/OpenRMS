const mongoose = require('mongoose')

const restaurantSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  employees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }],
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }]
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant

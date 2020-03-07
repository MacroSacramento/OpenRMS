const mongoose = require('mongoose')

const restaurantSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  employees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }],
  phoneNumber: {
    type: String,
    required: true
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }]
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant
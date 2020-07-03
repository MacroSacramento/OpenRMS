const mongoose = require('mongoose')

const foodItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  ingredients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ingredient',
  }],
  modifications: [{
    ingredients: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ingredient',
      isExtra: Boolean,
      isRemoved: Boolean
    }]
  }]
})

const FoodItem = new mongoose.model('Item', foodItemSchema)

module.exports = FoodItem

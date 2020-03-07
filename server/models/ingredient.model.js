const mongoose = require('mongoose')

const ingredientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
})

const Ingredient = new mongoose.model('Ingredient', ingredientSchema)

module.exports = Ingredient
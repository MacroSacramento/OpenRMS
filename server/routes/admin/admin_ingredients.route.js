const Ingredient = require('../../models/ingredient.model')

const router = require('express').Router()

let ingredient = require('../../models/ingredient.model')

router.route('')
  .post((req, res) => {
    const { name, price, quantity } = req.body
    const ingredient = new Ingredient({ name, price, quantity }).save()
      .then(() => res.json('Added Ingredient'))
  })

module.exports = router

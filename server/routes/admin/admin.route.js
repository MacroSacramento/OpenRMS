// const basicAuth = require('express-basic-auth')
const router = require('express').Router()

let Customer = require('../../models/customer.model')
let FoodItem = require('../../models/foodItem.model')
let Ingredient = require('../../models/ingredient.model')
let Order = require('../../models/order.model')
let Restaurant = require('../../models/restaurant.model')

router.use('/employees/', require('./admin_employees.route'))
router.use('/ingredients/', require('./admin_ingredients.route'))
router.use('/restaurants/', require('./admin_restaurants.route'))

module.exports = router

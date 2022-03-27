const router = require('express').Router();

//DATA MODELS
// let Customer = require('../models/customer.model')
// let FoodItem = require('../models/foodItem.model')
// let Ingredient = require('../models/ingredient.model')
// let Order = require('../models/order.model')
// let Restaurant = require('../models/restaurant.model')

//ROUTES FOR APIS
const employeeRoute = require('./admin/admin_employees.route');
const ingredientRoute = require('./admin/admin_ingredients.route');
const restaurantRoute = require('./admin/admin_restaurants.route');

//ROUTE MIDDLEWARE
router.use('/employees/', employeeRoute);
router.use('/ingredients/', ingredientRoute);
router.use('/restaurants/', restaurantRoute);

module.exports = router;
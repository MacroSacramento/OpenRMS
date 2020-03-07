// const basicAuth = require('express-basic-auth')
const passport = require('passport')
const router = require('express').Router()

let Customer = require('../models/customer.model')
let Employee = require('../models/employee.model')
let FoodItem = require('../models/foodItem.model')
let Ingredient = require('../models/ingredient.model')
let Order = require('../models/order.model')
let Restaurant = require('../models/restaurant.model')

passport.use(Employee.createStrategy())
passport.serializeUser(Employee.serializeUser())
passport.deserializeUser(Employee.deserializeUser())

router.route('/restaurant')
  .get((req, res) => {
    Restaurant.find()
      .then(restaunts => res.json(restaunts))
      .catch(err => res.status(400).json(`Error: ` + err))
  })

router.route('/employees/')
  .post((req, res) => {
    const username = req.body.username
    const name = req.body.name
    const phoneNumber = req.body.phoneNumber
    const address = req.body.address
    const hireDate = new Date()
    const isManager = req.body.isManager
    const isAdmin = req.body.isAdmin
    const isActive = true

    const employee = new Employee({
      username,
      name,
      phoneNumber,
      address,
      hireDate,
      isManager,
      isAdmin,
      isActive
    })
    Employee.register(employee, req.body.password)
      .then(() => res.json('Employee added'))
      .catch(err => res.status(400).json('Error: ' + err))
  })
  .get((req, res) => {
    Employee.find({ isActive: true })
      .then(employees => res.send(employees))
      .catch(err => res.status(400).json(`Error: ${err}`))
  })
  .patch((req, res) => {
    Employee.find
  })

router.route('/:restaurantID')
  .get((req, res) => {
    Restaurant.find(req.params.restaurantID)
      .then(restaunt => res.json(restaunt))
      .catch(err => res.status(400).json(`Error: ` + err))
  })

module.exports = router
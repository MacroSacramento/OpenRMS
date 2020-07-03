const router = require('express').Router()

let Restaurant = require('../../models/restaurant.model')

router.route('/')
  .post((req, res) => {
    const { body } = req
    const { id, name, address, phoneNumber } = req.body

    const restaurant = new Restaurant({ id, name, address, phoneNumber })
      .save()
      .then(() => res.json('Restaurant created'))
      .catch(err => res.status(400).json('Error: ' + err))
  })
  .get((req, res) => {
    Restaurant.find()
      .then(restaunts => res.json(restaunts))
      .catch(err => res.status(400).json(`Error: ` + err))
  })

router.route('/:restaurantID')
  .get((req, res) => {
    Restaurant.find(req.params.restaurantID)
      .then(restaunt => res.json(restaunt))
      .catch(err => res.status(400).json(`Error: ` + err))
  })

module.exports = router

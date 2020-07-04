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
    if (req.query._id) {
      Restaurant.findById(req.query._id)
        .then(restaurant => res.send(restaurant))
        .catch(err => res.status(400).json(`Error: ${err}`))

    } else {
      Restaurant.find({})
        .then(restaurants => res.send(restaurants))
        .catch(err => res.status(400).json(`Error: ${err}`))
    }
  })

module.exports = router

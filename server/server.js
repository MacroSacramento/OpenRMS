require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const session = require('express-session')
const passport = require('passport')
const passportLocalMongoose = require('passport-local-mongoose')

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI
const MONGOOSE_OPTIONS = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

const app = express()
app.use(cors())
app.use(morgan('common'))
app.use(express.json())

app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/admin', require('./routes/admin/admin.route'))
app.use('/api/kds', require('./routes/kitchenDisplaySystem.route'))
app.use('/api/pos', require('./routes/pointOfSale.route'))
app.use('/api/restaurant', require('./routes/restaurant.route'))

mongoose.connect(MONGO_URI, MONGOOSE_OPTIONS)
mongoose.connection.once('open', () => {
  console.log('Mongo Connection Established Successfully')
})

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`)
})

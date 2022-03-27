require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');

//SET UP FOR MONGODB DATABASE
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost";
const MONGOOSE_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(MONGO_URI, MONGOOSE_OPTIONS);
mongoose.connection.once('open', () => {
  console.log('Database Connection Established Successfully.');
});

//ROUTES FOR APIS
const adminRoute = require('./routes/admin.route');
const restaurantRoute = require('./routes/restaurant.route');
const kdsRoute = require('./routes/kitchenDisplaySystem.route');
const posRoute = require('./routes/pointOfSale.route');

//SERVER SETUP AND MIDDLEWARE
const app = express();
app.use(cors());
app.use(morgan('common'));
app.use(express.json());

//MIDDLEWARE FOR SECURITY AND PASSPORT INITILIZATION
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//ROUTE MIDDLEWARE FOR APIS
app.use('/api/admin', adminRoute);
app.use('/api/kds', kdsRoute);
app.use('/api/pos', posRoute);
app.use('/api/restaurant', restaurantRoute);

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`)
});

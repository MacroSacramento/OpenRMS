const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const employeeSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
    required: true
  },
  hireDate: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  isManager: Boolean,
  isAdmin: Boolean,
  isActive: Boolean,
})

employeeSchema.plugin(passportLocalMongoose)

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee

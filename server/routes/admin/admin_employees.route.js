const passport = require('passport');
const router = require('express').Router();
const userSchema = require('../../validation');

const Employee = require('../../models/employee.model');
const Joi = require('joi');

passport.use(Employee.createStrategy());
passport.serializeUser(Employee.serializeUser());
passport.deserializeUser(Employee.deserializeUser());

router.route('/')
  .post((req, res) => {

    try {
      const userValidation = userSchema.validate(req.body);
      if(userValidation.error){
        const errors = userValidation.error;
        res.send(errors)
      }
    } catch (err) {
      console.log(err)
    }
    // const { 
    //   username, 
    //   name, 
    //   email, 
    //   phoneNumber, 
    //   address, 
    //   isManager, 
    //   isAdmin, 
    //   isActive 
    // } = req.body
    // const hireDate = new Date()

    // const employee = new Employee({
    //   username,
    //   name,
    //   email,
    //   phoneNumber,
    //   address,
    //   hireDate,
    //   isManager,
    //   isAdmin,
    //   isActive
    // })

    // Employee.register(employee, req.body.password)
    //   .then(() => res.json('Employee created'))
    //   .catch(err => res.status(400).json('Error: ' + err))

  })

  .get((req, res) => {
    if (req.query._id) {
      Employee.findById(req.query._id)
        .then(employee => res.send(employee))
        .catch(err => res.status(400).json(`Error: ${err}`))

    } else {
      Employee.find({ isActive: true })
        .then(employees => res.send(employees))
        .catch(err => res.status(400).json(`Error: ${err}`))
    }
  })

  .put((req, res) => {
    const { username, name, email, phoneNumber, address, isManager, isAdmin, isActive } = req.body

    const updatedEmployee = {
      username,
      name,
      email,
      phoneNumber,
      address,
      isManager,
      isAdmin,
      isActive
    }

    Employee.findByIdAndUpdate(req.body.id, updatedEmployee, (
      (err, employee) => {
        if (err) {
          res.status(400).json(`Error: ${err}`)
        } else {
          if (req.body.password != "") {
            employee.setPassword(req.body.password)
              .catch(err => res.status(400).json(`Error: ${err}`))
          }
          res.send(employee)
        }
      }
    ))

  })

  .delete((req, res) => {
    console.log(req.body)
    Employee.findById(req.body.id)
      .then(employee => console.log(employee))
    Employee.findByIdAndDelete(req.body.id)
      .then((res) => {
        res.json('Employee Deleted')
      })
      .catch(err => res.status(400).json(`Error: ${err}`))

  })

module.exports = router

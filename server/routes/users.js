// OKTA ROUTES
const express = require('express')
const router = express.Router()
const oktaClient = require('../config/oktaClient')

/* CREATE A NEW USER (REGISTER) */
router.post('/', (req, res, next) => {
  /// console.log('req:', req)
  if (!req.body) return res.sendStatus(400)
  const newUser = {
    profile: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      login: req.body.email
    },
    credentials: {
      password: {
        value: req.body.password
      }
    }
  }
  oktaClient
    .createUser(newUser)
    .then(user => {
      res.status(201)
      res.send(user)
    })
    .catch(err => {
      res.status(400)
      console.log('ERR!')
      res.send(err)
    })
})

module.exports = router

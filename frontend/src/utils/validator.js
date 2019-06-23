// PRETTY SURE THIS IS NOT USED

const { check, body } = require('express-validator/check')

module.exports = {
  email: body('email'.isEmail().withMessage('Invalid email'))
}

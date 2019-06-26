// DON'T THINK THIS IS USED...

var express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home page!' })
})

// GONNA NEED A USERCONTROLLER!

module.exports = router

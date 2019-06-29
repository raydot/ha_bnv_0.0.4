// var createError = require('http-errors')
// var express = require('express')
// var path = require('path')
// var cookieParser = require('cookie-parser')
var express = require('express')
var app = express()

var logger = require('morgan')
var cors = require('cors')

var port = process.env.PORT || 8080
console.warn('SERVER RUNNING ON: ', port)

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SET UP A LITTLE CORS
app.use(cors())

app.use('/api', indexRouter)

app.use('/api/users', usersRouter)

app.get('/authorized', function (req, res) {
  res.send('Secured Resource')
})

app.listen(port)

module.exports = app

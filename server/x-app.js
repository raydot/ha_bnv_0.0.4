var createError = require('http-errors')
var express = require('express')
var path = require('path')
// var cookieParser = require('cookie-parser')
var logger = require('morgan')
// var cors = require('cors')

// To read .env...
const dotenv = require('dotenv')
dotenv.config({ path: '../.env' })

// Mongoose
var mongoose = require('mongoose')
var mongoDB = process.env.DB_CREDS
mongoose.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true })
var db = mongoose.connection
db.on('error', function (err) {
  logger.error('connection error:', err)
})

db.on('connect', function () {
  logger.error('Mongo up and running!') // this doesn't work.  REVISIT.
})

// import the models. ///DOUBLECHECK HOW TO USE WITH AUTH0
var token = require('./models/token')
var user = require('./models/user')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/userRoutes')

var app = express()

/// ///////////////////
// AUTH0 APP CONFIG //
/// ///////////////////
var session = require('express-session')
var sess = {
  secret: process.env.AU0_EXP_SESS_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true
}

if (app.get('env') === 'production') {
  sess.cookie.secure = true // serve secure cookies, requires https
}

// app.use(session(sess))

// Load passport
var passport = require('passport')
var Auth0Strategy = require('passport-auth0')

// Configure pp to use Auth0
var strategy = new Auth0Strategy({
  domain: process.env.AU0_DOMAIN,
  clientID: process.env.AU0_CLIENT_ID,
  clientSecret: process.env.AU0_CL_SECRET,
  callbackURL:
    process.env.AU0_CALLBACK_URL || 'http://localhost:3000/callback'
},

function (accessToken, refreshToken, extraParams, profile, done) {
  // accessToken is the token to call Auth0 api (not needed in most cases
  // extraParams.id_token has the JSON web token
  // profile has user info
  return done(null, profile)
})

passport.use(strategy)
app.use(passport.initialize())
app.use(passport.session())

// You can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  done(null, user)
})

/// ///////////////////
// END AUTH0 CONFIG //
/// ///////////////////

// onsig express session

// var app = express()
// app.use(cors())

// view engine setup
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())

// app.use(express.static(path.join(__dirname, 'public')))

// for validation
// app.use(express.json())

// Routing
app.use('/', indexRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

// Mongo error handler
// function handleMongoErr() {
//   console.error("Error!"")
// }

// console.log('Running on port: ' + process.env.PORT + '. Lets light this candle!')

module.exports = app

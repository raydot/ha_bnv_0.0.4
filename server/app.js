// CODE from Auth0 API Quickstart

var express = require('express')
var app = express()
// var jwt = require('express-jwt')
// var jwks = require('jwks-rsa')

var port = process.env.PORT || 8080

// var jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: 'https://beyondnapavalley.auth0.com/.well-known/jwks.json'
//   }),
//   audience: 'https://azapi.beyondnapavalley.com',
//   issuer: 'https://beyondnapavalley.auth0.com/',
//   algorithms: ['RS256']
// })

// app.use(jwtCheck)

// var indexRouter = require('./routes/index')
// var usersRouter = require('./routes/users')

app.use('/api', index)
app.use('/api/users', users)

app.get('/authorized', function (req, res) {
  res.send('Secured Resource')
})

app.listen(port)

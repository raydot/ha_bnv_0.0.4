import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Login from './pages/Login';


//okta
//import { Security } from '@okta/okta-react'
// import config from './app.config'

import Main from './pages/Main'

// Stylin!
import './css/index.css'
import './css/unsemantic-grid-responsive-tablet-no-ie7.css'
//import 'bootstrap/dist/css/bootstrap.css'
//import './css/okta-sign-in.min.js'

//import registerServiceWorker from './registerServiceWorker'

function onAuthRequired({ history }) {
  history.push('/login')
}


// This can probably be moved into main...  AUTH0!
//import { makeMainRoutes } from './routes'
//const routes = makeMainRoutes()
 
//routes, <Main/>, document.getElementById("root")

// ReactDOM.render(  
//   routes,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Router>
    <Security issuer='https://dev-310767.okta.com/oauth2/default'
      client_id='0oaryf5txlK6fVanX356'
      redirect_uri={window.location.origin + '/implicit/callback'}
      onAuthRequired={onAuthRequired} 
    >
      <Main />
      <Route exact={true} path='/' component={Home} />
      <SecureRoute path='/dashboard' component={Dashboard} />
      <Route path='/login' render={() => <Login baseUrl='https://dev-310767.okta.com' />} />
      <Route path='/implicit/callback' component={ ImplicitCallback } />
    </Security>
  </Router>,
  document.getElementById('root')
)

//registerServiceWorker()
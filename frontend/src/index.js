import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

//okta
import { Security } from '@okta/okta-react'
import config from './app.config'

import Main from './pages/Main'

// Stylin!
import './css/index.css'
import './css/unsemantic-grid-responsive-tablet-no-ie7.css'
//import 'bootstrap/dist/css/bootstrap.css'
import './css/okta-sign-in.min.js'

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
    <Security
      issuer={ config.issuer }
      client_id={ config.client_id }
      redirect_uri={ config.redirect_uri }
      onAuthRequired={ onAuthRequired }
    >
      <Main />
    </Security>
  </Router>,
  document.getElementById('root')
)
//registerServiceWorker()
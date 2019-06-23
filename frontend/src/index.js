//import React from 'react'
import ReactDOM from 'react-dom'

//import Main from './pages/Main'
import './css/index.css'
import './css/unsemantic-grid-responsive-tablet-no-ie7.css'
import 'bootstrap/dist/css/bootstrap.css'

// This can probably be moved into main...
import { makeMainRoutes } from './routes'
const routes = makeMainRoutes()
 
//routes, <Main/>, document.getElementById("root")

ReactDOM.render(  
  routes,
  document.getElementById('root')
);

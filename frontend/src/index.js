import React from 'react'
import ReactDOM from 'react-dom'
import Main from './pages/Main'
import './css/index.css'
import './css/unsemantic-grid-responsive-tablet-no-ie7.css'
import 'bootstrap/dist/css/bootstrap.css'

import { makeMainRoutes } from './routes'

const routes = makeMainRoutes()
 
ReactDOM.render(
  //routes, <Main/>, document.getElementById("root")
  routes, document.getElementById('root')
);

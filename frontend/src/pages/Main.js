import React, { Component } from 'react'
import { Route, NavLink, BrowserRouter, Switch } from 'react-router-dom'

// Token Management
// import jwt_decode from 'jwt_decode'
// import setAuthToken from './utils/setAuthToken'
// import { setCurrentUser, logoutUser } from './actions/authActions'
// COOKIES FOR TOKEN MANAGEMENT
// import { CookiesProvider } from 'react-cookie'

// THIS ALL NEEDS TO BE DECOUPLED!

// REDUX FOR STATE MANAGEMENT!
// import { Provider } from 'react-redux'
// import store from './store'

// PRIVATE ROUTING
// import PrivateRoute from './components/private-route/PrivateRoute'

// import myAxios from 'axios'

//import * as express from 'express'
// import * as cookieParser from 'cookie-parser'
// import { authenticate } from './middleware/authenticate'

import auth0 from 'auth0-js'



import Home from "./Home"
import checkIn from "./check-in"
import Explore from "./Explore"
import Story from "./Story"
import Support from "./Support"
import Membership from "./Membership"
import Visits from "./Visits"
import Footer from "./Footer"
import MercuryWinery from "./MercuryWinery"
import Join from "./Join"
// import JoinV2 from './JoinV2'
import MyVisits from "./MyVisits"
import Dashboard from "./Dashboard"
// import Login from "./Login"
//import Register from "./Register"
import error404 from "./404"
import TOS from "./TOS"
//import JoinV2 from "./JoinV2"
//import redbackground from "../img/red-background.jpg"
//import logo from "../img/beyond-napa-logo.png"
//import { faBars } from '@fontawesome/free-solid-svg-icons'

//import Tester from "./Tester"

// This refreshes a dead token.
// myAxios.interceptors.response.use (
//   function (response){
//     // we're good!
//     return response
//   },
//     function(error) {
//       const errorResponse = error.response
//       if (isTokenExpiredError(errorResponse)) {
//         return resetTokenAndReattemptRequest(error)
//       }
//       // If it's something more than that, throw it back to axios
//       return Promise.reject(error)
//     }
// )

// function isTokenExpiredError(errorResponse) {
//   // logic
// }


//font awesome "hamburger"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//const elementx = <FontAwesomeIcon icon={faBars} />

// // CHECK TOKEN STATE TO KEEP USER LOGGED IN
// if (the DAMN TOKEN) {
//   // set auth token header auth
//   const token = // NOT LOCAL STORAGE
//   setAuthToken(token)

//   // DECODE TOKEN AND GET USER INFO AND EXPIRY
//   const decoded = jwt_decode(token)
//   //Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded))

//   // Check expired token
//   const currentTime = Date.now() / 1000
//   if (decoded.exp) < currentTime) {
//     // Party over, oops, out of time!
//     store.dispatch(logoutUser())
//   }

//   // Redirect to login
//   window.location.href = './login'
// }


 
// const app = express()
// app.use(cookieParser())
// app.use(authenticate)

// AUTH0
import Auth from '../Auth/Auth.js'
require('dotenv').config()

const auth = new Auth()
auth.login()

class Main extends Component {
  constructor(props) {
    super(props)
    //this.hbClick = this.hbClick.bind(this);
    this.state = { data: null }
  }



  // THIS NEEDS TO BE SPLIT OFF, but for now...
  // Also, use hooks!
  // componentDidMount() {
  //   // this.callBackendAPI('/calvin')
  //   //   .then(res => this.setState({ data: res.express }))
  //   //   .catch(err => console.log(err))
  //   this.callBackendAPI('/users/calvin')
  // }


  // callBackendAPI = async (whichRoute) => {
  //   // console.log(whichRoute)
  //   // const response = await fetch(whichRoute)
  //   // const body = await response.json()

  //   // if (response.status !== 200) {
  //   //   throw Error(body.message)
  //   // }
  //   // return body
  //   fetch(whichRoute)
  //     .then(res => this.setState({ data: res.json }))
  //     //.then( data => this.setState({ data }))

  //   //console.log({ this.state })
  //   console.log(this.state.data)
  // }

  // hbClick() {
  //   console.warn('beep');
  // }

  render() {
    return (
        <div>
        <nav>
        
        <div className="clear"></div>
        <div className="columns">
        	<div className="leftCol">
        		<NavLink to="/" className="logo"><span>Beyond Napa Valley</span></NavLink>
        	</div>
        	
        	<div className="rightCol">
        	<ul className="header">
            
	            <li><NavLink className="topMenuClass" to="/explore">Explore</NavLink></li>
	            <li><NavLink className="topMenuClass" to="/story">Our Story</NavLink></li>
	            <li><NavLink className="topMenuClass" to="/membership">Membership Benefits</NavLink></li>
	            <li><NavLink className="topMenuClass" to="/join">Join</NavLink></li>
	            <li><NavLink className="topMenuClass join" to="/login">LOG IN</NavLink></li>
              { /* THIS WILL BECOME THE HAMBURGER MENU
              <li>
                <button className="hbIcon" onclick="this.hbClick">
                  <i className="fa fa-bars"></i>
                </button>
              </li> */ }

			   </ul>
        </div>
        </div>
          
          <div className="clear"></div>
          </nav>
          <div className="mainContent">
            <Route exact path="/" component={Home}/>
            <Route exact path="/check-in" component={checkIn}/>
            <Route path="/explore" component={Explore}/>
            <Route path="/story" component={Story}/>
            <Route path="/support" component={Support}/>
            <Route path="/membership" component={Membership}/>
            <Route path="/visits" component={Visits}/>
            <Route path="/mercury-winery" component={MercuryWinery}/>
            <Route path="/join" component={Join}/>
            <Route path="/MyVisits" component={MyVisits}/>
            <Route path="/TOS" component={TOS}/>
            <Route path="/Dashboard" component={Dashboard}/>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
    );
  }
}

export default Main
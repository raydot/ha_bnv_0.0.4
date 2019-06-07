import React, { Component } from 'react'
import { Route, NavLink, BrowserRouter } from 'react-router-dom'

// Hashrouter removed in favor of browser router

// THIS ALL NEEDS TO BE DECOUPLED!

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
import Login from "./Login"
import Register from "./Register"
import error404 from "./404"
import TOS from "./TOS"
//import JoinV2 from "./JoinV2"
//import redbackground from "../img/red-background.jpg"
//import logo from "../img/beyond-napa-logo.png"
//import { faBars } from '@fontawesome/free-solid-svg-icons'

import Tester from "./Tester"

//font awesome "hamburger"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//const elementx = <FontAwesomeIcon icon={faBars} />

 
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
    const { data } = this.state
    return (
      <BrowserRouter>
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
            <Route path="/tester" component={Tester}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/TOS" component={TOS}/>
            {/*<Route path="/JoinV2" component={JoinV2}/>*/}
            <Route path="/Dashboard" component={Dashboard}/>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main
import React, { Component } from "react";



import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"

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
import Purchase from "./Purchase"
import Dashboard from "./Dashboard"
import MyVisits from "./MyVisits"
import MyDetails from "./MyDetails"
//import redbackground from "../img/red-background.jpg"
//import logo from "../img/beyond-napa-logo.png"
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Tester from "./Tester"

//font awesome "hamburger"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const elementx = <FontAwesomeIcon icon={faBars} />

 
class Main extends Component {
  constructor(props) {
    super(props);
    this.hbClick = this.hbClick.bind(this);
  }

  hbClick() {
    console.warn('beep');
  }

  render() {
    return (
      <HashRouter>
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
	            <li><NavLink className="topMenuClass" to="/purchase">Join</NavLink></li>
	            <li><NavLink className="topMenuClass join"to="/purchase">LOG IN</NavLink></li>
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
            <Route path="/purchase" component={Purchase}/>
            <Route path="/Dashboard" component={Dashboard}/>
            <Route path="/MyVisits" component={MyVisits}/>
            <Route path="/MyDetails" component={MyDetails}/>
            <Route path="/tester" component={Tester}/>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main
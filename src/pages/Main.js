import React, { Component } from "react";



import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"

import Home from "./Home"
import Regions from "./Regions"
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
import redbackground from "../img/red-background.jpg"
import logo from "../img/beyond-napa-logo.png"
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <nav>
        <div className="columns">
          <div className="leftCol">FB | Instagram | Twitter</div>
          <div className="rightCol">LOGIN</div>
        </div>
        <div className="clear"></div>
        <div className="columns">
        	<div className="leftCol">
        		<a href="#" className="logo"><span>Beyond Napa Valley</span></a>
        	</div>
        	
        	<div className="rightCol">
        	<ul className="header">
            
	            <li><NavLink to="/regions">Wine Regions</NavLink></li>
	            <li><NavLink to="/story">Our Story</NavLink></li>
	            <li><NavLink to="/support">Support</NavLink></li>
	            <li><NavLink to="/membership">Membership Benefits</NavLink></li>
	            <li><NavLink to="/purchase" className="purchase">Purchase</NavLink></li>
			</ul>
        	</div>
        </div>
          
          <div className="clear"></div>
          </nav>
          <div className="mainContent">
            <Route exact path="/" component={Home}/>
            <Route path="/regions" component={Regions}/>
            <Route path="/story" component={Story}/>
            <Route path="/support" component={Support}/>
            <Route path="/membership" component={Membership}/>
            <Route path="/visits" component={Visits}/>
            <Route path="/mercury-winery" component={MercuryWinery}/>
            <Route path="/purchase" component={Purchase}/>
            <Route path="/Dashboard" component={Dashboard}/>
            <Route path="/MyVisits" component={MyVisits}/>
            <Route path="/MyDetails" component={MyDetails}/>
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
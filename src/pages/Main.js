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
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="header">Wine Explorer</div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/regions">Wine Regions</NavLink></li>
            <li><NavLink to="/story">Our Story</NavLink></li>
            <li><NavLink to="/support">Support</NavLink></li>
            <li><NavLink to="/membership">Membership Benefits</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/regions" component={Regions}/>
            <Route path="/story" component={Story}/>
            <Route path="/support" component={Support}/>
            <Route path="/membership" component={Membership}/>
            <Route path="/visits" component={Visits}/>
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
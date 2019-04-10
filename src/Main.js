import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"

import Home from "./Home"
import Rate from "./Rate"
import Contact from "./Contact"
import Regions from "./Regions"
import Blog from "./Blog"
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Haydn's Awesome Wine App</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/regions">Join Our Tours</NavLink></li>
            <li><NavLink to="/rate">Rate a Wine</NavLink></li>
            <li><NavLink to="/blog">Haydn's thoughts</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/rate" component={Rate}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/regions" component={Regions}/>
            <Route path="/blog" component={Blog}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main
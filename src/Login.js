import React, { Component } from "react"

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"

import Main from "./Main"
import Visits from "./Visits"
import Rate from "./Rate"
import Regions from "./Regions"
import Blog from "./Blog"
import Contact from "./Contact"
 
class Login extends Component {
  render() {
    return (
	<HashRouter>
      <div>
		<ul className="header">
			<li><NavLink to="/main">Winery Visits</NavLink></li>
            <li><NavLink to="/visits">Winery Visits</NavLink></li>
            <li><NavLink to="/rate">Rate A Wine</NavLink></li>
            <li><NavLink to="/regions">Wine Regions</NavLink></li>
            <li><NavLink to="/blog">See our Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        <h2>Please enter some info, etc...</h2>
		<p>Name: <input type="text" class="inputText" /></p>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
 
        <p><NavLink to="/main"><button type="button">Login</button></NavLink></p>
		    <Route exact path="/" component={Login}/>
            <Route path="/main" component={Main}/>
            <Route path="/visits" component={Main}/>
            <Route path="/rate" component={Main}/>
            <Route path="/regions" component={Regions}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
      </div>
	</HashRouter>
    );
  }
}
 
export default Login;
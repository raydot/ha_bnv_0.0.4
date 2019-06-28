import React, { Component } from 'react'
import { Route, NavLink, BrowserRouter } from 'react-router-dom'

// REDUX
//import helpers from '../redux/helpers'

// IMAGES
import MercuryWinery from './MercuryWinery'

// DISPLAY PAGES
import Home from './Home'
import Explore from './Explore'
import Story from './Story'
import Support from './Support'
import Membership from './Membership'
import Visits from './Visits'
import Purchase from './Purchase'
import Footer from './Footer'
// import JoinV2 from './JoinV2'
import MyVisits from './MyVisits'


import TOS from './TOS'

// MEMBER PAGES
import Register from './Register'
import Join from './Join'
import checkIn from './check-in'
//import LoginPage from '../components/auth/LoginPage'

// HELPERS
//import ErrorBoundary from '../components/ErrorBoundary'
import error404 from './404'
//import config from '../app.config'

// OKTA
import { Security,  SecureRoute, ImplicitCallback } from '@okta/okta-react'
import Dashboard from './Dashboard'
//import BNVHome from './BNVHome'
import Login from './Login'


// OKTA
function onAuthRequired({ history }) {
  history.push('/login')
}

// Kick the tires and light the fires!
console.log('REACT VERSION =', React.version)

class Main extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <Security issuer='https://dev-310767.okta.com/oauth2/default'
                      client_id='0oaryf5txlK6fVanX356'
                      redirect_uri={window.location.origin + '/implicit/callback'}
                      onAuthRequired={onAuthRequired} >
            <nav>
            
              <div className='clear'></div>
              <div className='columns'>
              	<div className='leftCol'>
              		<NavLink to='/' className='logo'><span>Beyond Napa Valley</span></NavLink>
              	</div>
              	
              	<div className='rightCol'>
                  
                  	<ul className='header'>
                      
          	            <li><NavLink className='topMenuClass' to='/explore'>Explore</NavLink></li>
          	            <li><NavLink className='topMenuClass' to='/membership'>Membership Benefits</NavLink></li>
          	            <li><NavLink className='topMenuClass' to='/join'>Join</NavLink></li>
          	            <li><NavLink className='topMenuClass join' to='/login'>Login</NavLink></li>
                        { /* THIS WILL BECOME THE HAMBURGER MENU
                        <li>
                          <button className='hbIcon' onclick='this.hbClick'>
                            <i className='fa fa-bars'></i>
                          </button>
                        </li> */ }

              			 </ul>
                   
                </div>
              </div>
              
              <div className='clear'></div>
            </nav>


            <div className='mainContent'>
              <Route exact path='/' component={Home}/>
              <SecureRoute exact path='/check-in' component={checkIn}/>
              <Route path='/explore' component={Explore}/>
              <Route path='/story' component={Story}/>
              <Route path='/support' component={Support}/>
              <Route path='/membership' component={Membership}/>
              <Route path='/visits' component={Visits}/>
              <Route path='/mercury-winery' component={MercuryWinery}/>
              <Route path='/join' component={Join}/>
              <Route path='/myvisits' component={MyVisits}/>
              <Route path='/tos' component={TOS}/>
              <SecureRoute path='/dashboard' component={Dashboard}/>
              <Route path='/register' component={Register} />
              <Route path='/login' render={() => <Login baseUrl='https://dev-310767.okta.com'/>} />
              <SecureRoute path='/purchase' component={Purchase} />
              <Route path='/404' component={error404} />
              <Route path='/implicit/callback' component={ ImplicitCallback } />
            </div>
            <div className='footer'>
              <Footer />
            </div>
            </Security>
          </BrowserRouter>
        </div>
    );
  } // render
} // class

export default Main
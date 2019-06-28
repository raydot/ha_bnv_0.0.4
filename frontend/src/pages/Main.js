import React, { Component } from 'react'
import { Route, NavLink, BrowserRouter } from 'react-router-dom'

// REDUX
//import helpers from '../redux/helpers'

// import auth0 from 'auth0-js'

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
import Login from './Login'

// HELPERS
//import ErrorBoundary from '../components/ErrorBoundary'
import error404 from './404'
//import config from '../app.config'

// OKTA
import Navigation from '../components/shared/Navigation'
import Dashboard from './Dashboard'

//import JoinV2 from './JoinV2'
//import redbackground from '../img/red-background.jpg'
//import logo from '../img/beyond-napa-logo.png'
//import { faBars } from '@fontawesome/free-solid-svg-icons'



//font awesome 'hamburger'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//const elementx = <FontAwesomeIcon icon={faBars} />


// const app = express()

// AUTH0
//import Auth from '../Auth/Auth.js'


// const auth = new Auth()
// auth.login()

// OKTA
//import { SecureRoute, ImplicitCallback } from '@okta/okta-react'

// Kick the tires and light the fires!
console.log('REACT VERSION =', React.version)

class Main extends Component {
  // constructor(props) {
  //   super(props)

  //   // USELESS CONSTRUCTOR

  //   //this.hbClick = this.hbClick.bind(this);
  //   //this.state = { data: null }
  //   // this.login = this.login.bind(this)
  //   // this.logout = this.logout.bind(this)
  //   //this.goToLogin = this.goToLogin.bind(this)
  // }

  //AUTH0
  // goTo(route) {
  //     this.props.history.replace(`/${route}`)
  // }

  // nada() {
  //   return () => {}
  // }

  // login(e) {
  //   e.preventDefault()
  //   this.props.auth.login()
  // }

  // logout(e) {
  //   e.preventDefault()
  //   this.props.auth.logout()
  // }



  // goToLogin(e) {
  //   e.preventDefault()
  //   //this.props.auth.goToLogin()
    
  //   this.props.history.replace('/login')
  //   //return <Redirect to='/login' />

  // }

  componentDidMount() {
    // const { renewSession } = this.props.auth;

    // if (localStorage.getItem('isLoggedIn') === 'true') {
    //   renewSession();
    // }
  }


  // hbClick() {
  //   console.warn('beep');
  // }

  render() {
    // const { isAuthenticated } = this.props.auth

    // if (!isAuthenticated()) {
    // var outItemText = 'LOG IN'
    // //var outItemClick = this.nada
    // var outItemClick = this.login
    // var outItemRoute = '/login'
    // } else {
    //   outItemText = 'LOG OUT'
    //   outItemClick = this.logout
    //   outItemRoute = '/'
    //   var uNameX = this.uName
    // }


    return (
        <div>
          <Navigation />
          <BrowserRouter>
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
              <Route exact path='/check-in' component={checkIn}/>
              <Route path='/explore' component={Explore}/>
              <Route path='/story' component={Story}/>
              <Route path='/support' component={Support}/>
              <Route path='/membership' component={Membership}/>
              <Route path='/visits' component={Visits}/>
              <Route path='/mercury-winery' component={MercuryWinery}/>
              <Route path='/join' component={Join}/>
              <Route path='/myvisits' component={MyVisits}/>
              <Route path='/tos' component={TOS}/>
              <Route path='/dashboard' component={Dashboard}/>
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/purchase' component={Purchase} />}
              <Route path='/404' component={error404} />
            </div>
            <div className='footer'>
              <Footer />
            </div>
          </BrowserRouter>
        </div>
    );
  } // render
} // class

export default Main
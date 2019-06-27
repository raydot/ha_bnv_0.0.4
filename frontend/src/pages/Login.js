<<<<<<< HEAD
import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"
<<<<<<< HEAD
import { NavLink } from 'react-router-dom'

import MustardVines from "../img/mustard-vines.jpg"
// import MercurySquare from "../img/mercury-square.jpg"
// import jRickards from "../img/jrickards.jpg"
// import ramazzotti from "../img/ramazzotti-wine.jpg"
// import nallewinery from "../img/nalle-winery.jpg"
// import taltywine from "../img/talty-wine.jpg"
// import alquimista from "../img/alquimista-cellars.jpg"
// import hambycellars from "../img/hamby-cellars.jpg"
// import camapanaranch from "../img/campana-ranch.jpg"
// import brooksnote from "../img/brooks-note-winery.jpg"

 
class Regions extends Component {
=======
import { NavLink } from "react-router-dom"
import LoginMainImage from "../img/login-main-image.jpg"
=======
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Grid, GridContainer} from 'unsemantic'
import { NavLink } from 'react-router-dom'

// OKTA
// import OktaAuth from '@okta/okta-auth-js'
import { withAuth } from '@okta/okta-react'
import LoginForm from '../components/auth/LoginForm'

//AUTH0
// import LoginMainImage from "../../img/login-main-image.jpg"
//import axios from 'axios'
>>>>>>> 818ec2454828b223b09bf505a46c6da708799258



// Login
// import LoginComponent from '../components/LoginComponent'

//import PropTypes from 'prop-types'
//import { connect } from 'react-redux'


<<<<<<< HEAD

 
class Login extends Component {

  constructor(props) {
    super(props)
    //this.logIn = this.logIn.bind(this)
    const { isAuthenticated } = this.props.authVar
    //console.log(authVar)
    console.log('ia?', isAuthenticated())
   }






>>>>>>> fdba608e4f3610b727005da3f0313893fa588c97
  render() {
    return (
      <div>
		  <div className="smallHeader">
		  	<div className="titleInfo">
		  		<h1 className="pageTitle">LOGIN</h1>
          	</div>
          	<div className="hero-overlay"></div>
          	<img src={ MustardVines } alt="Mustard Vines" className="wineryImage" />
          </div>
          
          <div className="mainContent">
          
	          <div className="content synopsis">
	            <GridContainer>
	            	<Grid desktop="100">
<<<<<<< HEAD
	            		<p>Beyond Napa Valley’s Wine Explorer membership allows you to access a curated list of participating wineries with exclusive discounts. This membership is for the wine explorer who wants to get out and explore the wine regions of the world.</p>
	            		<p>

With membership you’ll get the following:</p>
=======
	            		<form action="beyondnapavalley.auth0.com" method="get">
                    <input type="hidden" name="client_id" value="Oaph33YXjfkEcdVIrE7YT6qeksUt03dy" />
                    <input type="hidden" name="redirect_uri" value="/dashboard" />
                    EMAIL: <input type='text' name='uEml' /><br />
                    PASSWORD: <input type='password' name='pw1' /><br />
                    <button type='submit' onClick={ () => this.logIn() }>Submit</button>
                  </form>
	            		<h3 className="center">Not a member? <NavLink to='/join'>Join now!</NavLink></h3>
>>>>>>> fdba608e4f3610b727005da3f0313893fa588c97
	            	</Grid>
	            </GridContainer>
	          </div>
	          
	          
	       
	       
	       
          
          
	      
	     
          
          
	       
	       </div>
       </div> // Close mainContent
    );
  }
}
<<<<<<< HEAD
 
export default Regions
=======

=======
// withAuth IS AN OKTA HOC
export default withAuth (
  class Login extends Component {
    constructor(props) {
      super(props)
      this.state = { authenticated: null }
      this.checkAuthentication = this.checkAuthentication.bind(this)
      this.checkAuthentication()
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated()
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated })
      }
    }

    componentDidUpdate() {
      this.checkAuthentiation()
    }

    // AUTH0
     //  //this.logIn = this.logIn.bind(this)
     //  const { isAuthenticated } = this.props.authVar
     //  //console.log(authVar)
     //  console.log('ia?', isAuthenticated())
     //  this.customLogin = this.customLogin.bind(this)
     //  this.login = this.login.bind(this)
     // }

     // customLogin() {
     //  this.props.authVar.customLogin()
     // }

     // login(e) {
     //   e.preventDefault()
     //   this.props.authVar.login()
     // }

     // const axiosTest = () => {
     //  axios.post('foo', {
     //  })
     //  .then(function (response) {
     //    console.log(response)
     //  })
     //  .catch(function (error) {
     //    console.log(error)
     //  })
     // }
    render() {

      if (this.state.authenticated === null) return null

      return this.state.authenticated 
        ? (<Redirect to={{ pathname: './dashboard '}} />)
        : (
            <div>
        		  <div className="smallHeader">
        		  	<div className="titleInfo">
        		  		<h1 className="pageTitle">LOGIN</h1>
              	</div>
              	<div className="hero-overlay"></div>
              	<LoginForm />
              </div>
  	          <div className="content">
  	            <GridContainer>
  	            	<Grid desktop="100">
  	            		 <LoginForm />
  	            	</Grid>
  	            </GridContainer>
  	          </div>
            </div>
          );
    }
  }
)


// SOME STATE MANAGEMENT STUFF STILL FLOATING AROUNG
>>>>>>> 818ec2454828b223b09bf505a46c6da708799258
// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// })
//  
// export default connect(
//   mapStateToProps,
//   { loginUser }
// )(Login)
<<<<<<< HEAD
export default Login
>>>>>>> fdba608e4f3610b727005da3f0313893fa588c97
=======
//export default Login
>>>>>>> 818ec2454828b223b09bf505a46c6da708799258

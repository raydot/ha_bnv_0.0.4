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



// Login
// import LoginComponent from '../components/LoginComponent'

//import PropTypes from 'prop-types'
//import { connect } from 'react-redux'



 
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

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// })
//  
// export default connect(
//   mapStateToProps,
//   { loginUser }
// )(Login)
export default Login
>>>>>>> fdba608e4f3610b727005da3f0313893fa588c97

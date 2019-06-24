import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"
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






  render() {
    return (
      <div>
		  <div className="smallHeader">
		  	<div className="titleInfo">
		  		<h1 className="pageTitle">LOGIN</h1>
          	</div>
          	<div className="hero-overlay"></div>
          	<img src={ LoginMainImage } alt="Mustard Vines" className="wineryImage" />
          </div>
          
          
          
	          <div className="content">
	            <GridContainer>
	            	<Grid desktop="100">
	            		<form action="beyondnapavalley.auth0.com" method="get">
                    <input type="hidden" name="client_id" value="Oaph33YXjfkEcdVIrE7YT6qeksUt03dy" />
                    <input type="hidden" name="redirect_uri" value="/dashboard" />
                    EMAIL: <input type='text' name='uEml' /><br />
                    PASSWORD: <input type='password' name='pw1' /><br />
                    <button type='submit' onClick={ () => this.logIn() }>Submit</button>
                  </form>
	            		<h3 className="center">Not a member? <NavLink to='/join'>Join now!</NavLink></h3>
	            	</Grid>
	            </GridContainer>
	          </div>


			 
	       </div>
    );
  }
}

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
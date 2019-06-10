import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"
import { NavLink } from "react-router-dom"
//import MustardVines from "../img/mustard-vines.jpg"
import LoginMainImage from "../img/login-main-image.jpg"

// Login
import LoginComponent from '../components/LoginComponent'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'



 
class Login extends Component {

  constructor() {
    super()
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.auth.isAuthenticated) {
        this.props.history.push('/dashboard') // push user to dashboard
      }

      if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        })
      }
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
	            		<LoginComponent />
	            		<h3 className="center">Not a member? <NavLink to='/join'>Join now!</NavLink></h3>
	            	</Grid>
	            </GridContainer>
	          </div>


			 
	       </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})
 
export default connect(
  mapStateToProps,
  { loginUser }
)(Login)
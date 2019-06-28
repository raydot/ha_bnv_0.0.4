
import React, { Component } from "react"
import { NavLink, Redirect } from 'react-router-dom'

// DISPLAY
import { Grid, GridContainer} from "unsemantic"

import MustardVines from "../img/mustard-vines.jpg"

// OKTA
import OktaSignInWidget from './OktaSignInWidget'
import { withAuth } from '@okta/okta-react'
//import LoginForm from '../components/auth/LoginForm'

 
export default withAuth(
  class Login extends Component {

    constructor(props) {
        super(props)
        this.onSuccess = this.onSuccess.bind(this)
        this.onError = this.onError.bind(this)
        this.state = { authenticated: null };
        //this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();
      }

      async checkAuthentication() {
        const authenticated = await this.props.auth.isAuthenticated()
        if (authenticated !== this.state.authenticated) {
          this.setState({ authenticated });
        }
      }

      componentDidUpdate() {
        this.checkAuthentication();
      }

      onSuccess(res) {
        if (res.status === 'SUCEESS') {
          return this.props.auth.redirect({
            sessionToken: res.session.token
          })
        } else {
          // The user can be in another authentication state that requires further action
          // https://github.com/okta/okta-signin-widget#rendereloptions-success-error

        }
      }

      onError(err) {
        console.log('error logging in', err)
      }


    render() {

      if (this.state.authenticated === null) return null
      
      return this.state.authenticated 
      ? <Redirect to={{ pathname: '/dashboard' }} />
      : (
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
                    <OktaSignInWidget
                      baseUrl = { this.props.baseUrl }
                      onSuccess = { this.onSuccess }
                      onError = { this.onError }
                    />
  	            		<h3 className="center">Not a member? <NavLink to='/register'>Join now!</NavLink></h3>
  	            	</Grid>
  	            </GridContainer>
  	          </div>
  	       </div>
         </div> // Close mainContent
      );

    }
  }
)
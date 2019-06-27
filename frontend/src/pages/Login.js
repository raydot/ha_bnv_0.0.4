
import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"
import { NavLink, Redirect } from 'react-router-dom'
import MustardVines from "../img/mustard-vines.jpg"

// OKTA
import { withAuth } from '@okta/okta-react'
import LoginForm from '../components/auth/LoginForm'

 
export default withAuth(
  class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { authenticated: null };
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();
      }

      async checkAuthentication() {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
          this.setState({ authenticated });
        }
      }

      componentDidUpdate() {
        this.checkAuthentication();
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
  	            		<p>Beyond Napa Valley’s Wine Explorer membership allows you to access a curated list of participating wineries with exclusive discounts. This membership is for the wine explorer who wants to get out and explore the wine regions of the world.</p>
  	            		<p>With Membership you'll get the following.</p>
  	            		{/*<form action="beyondnapavalley.auth0.com" method="get">
                      <input type="hidden" name="client_id" value="Oaph33YXjfkEcdVIrE7YT6qeksUt03dy" />
                      <input type="hidden" name="redirect_uri" value="/dashboard" />
                      EMAIL: <input type='text' name='uEml' /><br />
                      PASSWORD: <input type='password' name='pw1' /><br />
                      <button type='submit' onClick={ () => this.logIn() }>Submit</button>
                    </form>*/}
                    <LoginForm />
  	            		<h3 className="center">Not a member? <NavLink to='/join'>Join now!</NavLink></h3>
  	            	</Grid>
  	            </GridContainer>
  	          </div>
  	       </div>
         </div> // Close mainContent
      );
    }
  }
)
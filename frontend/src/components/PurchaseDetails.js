import React, { Component } from 'react'
//import { Grid, GridContainer} from 'unsemantic'

//import { Route, NavLink } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
//import MustardVines from "../img/mustard-vines.jpg"

import OktaAuth from '@okta/okta-auth-js'
import { withAuth } from '@okta/okta-react'

import config from '../app.config'

export default withAuth(
	class PurchaseDetails extends Component {
			constructor(props) {
				super(props)
				this.state = {
					firstName: '',
					lastName: '',
					email: '',
					password: '',
					password2: '',
					sessionToken: null
				}

				// okta
				this.oktaAuth = new OktaAuth( {url: config.url })
				this.checkAuthentication = this.checkAuthentication.bind(this)
				this.checkAuthentication()

			  this.handleSubmit = this.handleSubmit.bind(this);
			  this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
			  this.handleLastNameChange = this.handleLastNameChange.bind(this);
			  this.handleEmailChange = this.handleEmailChange.bind(this);
			  this.handlePasswordChange = this.handlePasswordChange.bind(this);
			}

			async checkAuthentication() {
			  const sessionToken = await this.props.auth.getIdToken();
			  if (sessionToken) {
			    this.setState({ sessionToken });
			  }
			}

			componentDidUpdate() {
			  this.checkAuthentication();
			}

			handleFirstNameChange(e) {
			  this.setState({ firstName: e.target.value });
			}
			handleLastNameChange(e) {
			  this.setState({ lastName: e.target.value });
			}
			handleEmailChange(e) {
			  this.setState({ email: e.target.value });
			}
			handlePasswordChange(e) {
			  this.setState({ password: e.target.value });
			}
			handlePassword2Change(e) {
			  this.setState({ password2: e.target.value });
			}

			handleSubmit(e) {
			  e.preventDefault()
			  fetch('/api/users', {
			    method: 'POST',
			    headers: {
			      Accept: 'application/json',
			      'Content-Type': 'application/json'
			    },
			    body: JSON.stringify(this.state)
			  })
			    .then(user => {
			      this.oktaAuth
			        .signIn({
			          username: this.state.email,
			          password: this.state.password
			        })
			        .then(res =>
			          this.setState({
			            sessionToken: res.sessionToken
			          })
			        )
			    })
			    .catch(err => console.log);
			}


		render() {
			if (this.state.sessionToken) {
				this.props.auth.redirect({ sessionToken: this.state.sessionToken})
				return null
			}
    	return (
				<div className="signup-content">
					<h3>PurchaseDetails.js</h3>
						<form onSubmit={this.handleSubmit}>
						  <div className="form-element">
						  	{/*<!-- REMEMBER WE WILL ALREADY HAVE SOME INFO (EMAIL FIRST LAST), NEED PLACE TO DISPLAY -->*/}
						    <label>Email:</label>
						    <input
						      type="email"
						      id="email"
						      value={this.state.email}
						      onChange={this.handleEmailChange}
						    />
						  </div>
						  <div className="form-element">
						    <label>First Name:</label>
						    <input
						      type="text"
						      id="firstName"
						      value={this.state.firstName}
						      onChange={this.handleFirstNameChange}
						    />
						  </div>
						  <div className="form-element">
						    <label>Last Name:</label>
						    <input
						      type="text"
						      id="lastName"
						      value={this.state.lastName}
						      onChange={this.handleLastNameChange}
						    />
						  </div>
						  <div className="form-element">
						    <label>Address:</label>
						    <input
						      type="password"
						      id="password"
						      value={this.state.password}
						      onChange={this.handlePasswordChange}
						    />
						  </div>
						  <div className="form-element">
						    <label>City:</label>
						    <input
						      type="password2"
						      id="password2"
						      value={this.state.password2}
						      onChange={this.handlePassword2Change}
						    />
						  </div>
						  <input type="submit" id="submit" value="Register" />
						</form>
						</div>
    	)
  	}
	}
)
 
// export default RegistrationDetails
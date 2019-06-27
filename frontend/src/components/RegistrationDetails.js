import React, { Component } from 'react'
//import { Grid, GridContainer} from 'unsemantic'

//import { Route, NavLink } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
//import MustardVines from "../img/mustard-vines.jpg"

import OktaAuth from '@okta/okta-auth-js'
import { withAuth } from '@okta/okta-react'

import config from '../app.config'

export default withAuth(
	class RegistrationDetails extends Component {
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
				<div className="form-setup">
							<form onSubmit={this.handleSubmit}>
						  <div className="form-group">
							  <label>E-mail Address</label>
						    <input
						      className="form-input"
						      type="email"
						      id="email"
						      value={this.state.email}
						      onChange={this.handleEmailChange}
						      
						    />
						  </div>
						  <div className="form-group">
						    <input
						      className="form-input"
						      type="text"
						      id="firstName"
						      value={this.state.firstName}
						      onChange={this.handleFirstNameChange}
						      placeholder="First Name"
						    />
						  </div>
						  <div className="form-group">
						    <input
						      className="form-input"
						      type="text"
						      id="lastName"
						      value={this.state.lastName}
						      onChange={this.handleLastNameChange}
						      placeholder="Last Name"
						    />
						  </div>
						  <div className="form-group">
						    <input
						      className="form-input"
						      type="password"
						      id="password"
						      value={this.state.password}
						      onChange={this.handlePasswordChange}
						      placeholder="Password"
						    />
						  </div>
						  <div className="form-group">
						    <input
						      className="form-input"
						      type="password2"
						      id="password2"
						      value={this.state.password2}
						      onChange={this.handlePassword2Change}
						      placeholder="Confirm Password"
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
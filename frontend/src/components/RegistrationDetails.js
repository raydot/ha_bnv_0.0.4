import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import OktaAuth from '@okta/okta-auth-js'
import { withAuth } from '@okta/okta-react'

import config from '../app.config'

// FORMIK & YUP, THOSE WACKY KIDS!
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup' // Import everything, must be fixed

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
			  this.handlePassword2Change = this.handlePassword2Change.bind(this);
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

			//YUP -- This could be it's own component?
			const validationSchema = Yup.object().shape({
				email: Yup.string()
					.email('Please enter a valid email')
					.required('An email address is required')
				password: Yup.string()
					.min(8, 'Password must be at least 8 characters')
					.required('A password is required')
				password2: Yup.string()
					.oneOf([value.password], 'The passwords do not match')
				// NOT USING THIS BUT:
				consent: Yup.bool()
					.test(
						'consent',
						'You must agree with the Terms and Conditions to register',
						value => value === true
					)
					.required (
						'You must agree with the Terms and Conditions to register'
					)
			})


		render() {
			if (this.state.sessionToken) {
				this.props.auth.redirect({ sessionToken: this.state.sessionToken})
				return null
			}
    	return (
				<div className="form-setup grey-signup-box">
							<h2>Create Account</h2>
							<Formik
								initialValues={{ email: '', password: '', password2: '' }}
								validate={values => {
									let errors = {}
									if (!values.email) {
										errors.email='Required'
									} else if (
					          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					        ) {
					          errors.email = 'Invalid email address';
					        }
					        return errors;
								}}
								onSubmit={(values, { setSubmitting}) => {
									setTimeout(() => {
										alert(JSON.stringify(values, null, 2))
										setSubmitting(false)
									}, 400)
								}}
							>
							{({ isSubmitting }) => (
								// <form onSubmit={this.handleSubmit}>
								<Form>
								<div className="form-group">
									<label>E-mail Address</label>
									<input
								      className="form-input"
								      type="email"
								      name="email"
								      id="email"
								      value={this.state.email}
								      onChange={this.handleEmailChange}
								      
								    />
								   <ErrorMessage name="email" component="div" />
							<label>First Name</label>
						    <Field
						      className="form-input"
						      type="text"
						      id="firstName"
						      value={this.state.firstName}
						      onChange={this.handleFirstNameChange}
						    />
						    <label>Last Name</label>
						    <Field
						      className="form-input"
						      type="text"
						      id="lastName"
						      value={this.state.lastName}
						      onChange={this.handleLastNameChange}
						    />
						    <label>Password</label>
						    <Field
						      className="form-input"
						      type="password"
						      id="password"
						      value={this.state.password}
						      onChange={this.handlePasswordChange}
						    />
						    <label>Confirm Password</label>
						    <Field
						      className="form-input"
						      type="password2"
						      id="password2"
						      value={this.state.password2}
						      onChange={this.handlePassword2Change}
						    />
						  </div>
						  <button type="submit" id="submit" className="flat-button button-full-width" disabled={isSubmitting}>
						  	Become a Wine Explorer Member!
						  </button>
						</Form>
						)}
					</Formik>
						<p className="small">By signing in you agree to Beyond Napa Valley <NavLink to="/tos">Terms and Conditions</NavLink></p>
						<p className="center">Already have an account? <NavLink to="/login">Sign in</NavLink></p>
						</div>
    	)
  	}
	}
)
 
// export default RegistrationDetails
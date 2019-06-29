import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import OktaAuth from '@okta/okta-auth-js'
import { withAuth } from '@okta/okta-react'

import config from '../app.config'

// FORMIK & YUP, THOSE WACKY KIDS!
import { Formik } from 'formik'
import validate from './validate-spected'
//import * as Yup from 'yup' // Import everything, must be fixed
import getValidationSchema from './getValidationSchema-spected'


// //YUP -- This could be its own component
// const validationSchema = Yup.object().shape({
// 	email: Yup.string()
// 		.email('Please enter a valid email')
// 		.required('An email address is required'),
// 	password: Yup.string()
// 		.min(8, 'Password must be at least 8 characters')
// 		.required('A password is required'),
// 	password2: Yup.string()
// 		.oneOf([values.password], 'The passwords do not match'),
// 	// NOT USING THIS BUT:
// 	consent: Yup.bool()
// 		.test(
// 			'consent',
// 			'You must agree with the Terms and Conditions to register',
// 			value => value === true
// 		)
// 		.required (
// 			'You must agree with the Terms and Conditions to register'
// 		)
// })

const initialValues = {
	email: '',
	password: '',
	passwordConfirmation: '',
	consent: false
}

//exp


// 	class RegistrationDetails extends Component {
// 			constructor(props) {
// 				//super(props)
// 				this.state = {
// 					// firstName: '',
// 					// lastName: '',
// 					// email: '',
// 					// password: '',
// 					// password2: '',
// 					sessionToken: null
// 				}

// 				// okta
// 				this.oktaAuth = new OktaAuth( {url: config.url })
// 				this.checkAuthentication = this.checkAuthentication.bind(this)
// 				this.checkAuthentication()

// 			  // this.handleSubmit = this.handleSubmit.bind(this);
// 			  // this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
// 			  // this.handleLastNameChange = this.handleLastNameChange.bind(this);
// 			  // this.handleEmailChange = this.handleEmailChange.bind(this);
// 			  // this.handlePasswordChange = this.handlePasswordChange.bind(this);
// 			  // this.handlePassword2Change = this.handlePassword2Change.bind(this);
// 			}

// 			async checkAuthentication() {
// 			  const sessionToken = await this.props.auth.getIdToken();
// 			  if (sessionToken) {
// 			    this.setState({ sessionToken })
// 			  }
// 			}

// 			componentDidUpdate() {
// 			  this.checkAuthentication()
// 			}

// 			// handleFirstNameChange(e) {
// 			//   this.setState({ firstName: e.target.value })
// 			// }

// 			// handleLastNameChange(e) {
// 			//   this.setState({ lastName: e.target.value })
// 			// }

// 			// handleEmailChange(e) {
// 			//   this.setState({ email: e.target.value })
// 			// }

// 			// handlePasswordChange(e) {
// 			//   this.setState({ password: e.target.value })
// 			// }

// 			// handlePassword2Change(e) {
// 			//   this.setState({ password2: e.target.value })
// 			// }

// 		render() {
// 			if (this.state.sessionToken) {
// 				this.props.auth.redirect({ sessionToken: this.state.sessionToken})
// 				return null
// 			}
//     	return (
// 				<Formik
// 					initialValues={ initialValues }
// 					validate={ validate(getValidationSchema) }
// 					onSubmit={onSubmit}
// 					render={signUpForm}
// 				/>
//     	)
//   	}
// 	}
export default function SignUpFormContainer() {
	return (
		<Formik
			initialValues={ initialValues }
			validate={ validate(getValidationSchema) }
			onSubmit={ onSubmit }
			render={ SignUpForm }
		/>
	)
}

///EMAIL IS THE ONLY ONE THAT'S RIGHT
///IS THE ID FIELD REALLY NEEDED?
function SignUpForm(props) {

	const { isSubmitting, errors, handleChange, handleSubmit } = props

	return (
		<div className="form-setup grey-signup-box">
				<h2>Create Account</h2>
				<Form>
					<div className="form-group">

						<label>E-mail Address</label>
						<input
					      className="form-input"
					      type="email"
					      name="email"
					      id="email"
					      onChange={handleChange}
					    />
					  <div className="form-field-error">{ errors.email }</div>

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
			  <button onClick={handleSubmit}>{isSubmitting ? 'Loading...' : 'Become a Wine Explorer!'}</button>
			</Form>
			<p className="small">By signing in you agree to Beyond Napa Valley <NavLink to="/tos">Terms and Conditions</NavLink></p>
			<p className="center">Already have an account? <NavLink to="/login">Sign in</NavLink></p>
		</div>
	)
}

function onSubmit(values, { setSubmitting, setErrors }) {
	setTimeout(() => {
		console.log('User has been successfully saved!', values)
		setSubmitting(false)
	}, 2000)
} 
// export default RegistrationDetails
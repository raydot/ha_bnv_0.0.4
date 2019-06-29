import React from 'react'
import { NavLink } from 'react-router-dom'

// import OktaAuth from '@okta/okta-auth-js'
// import { withAuth } from '@okta/okta-react'

// import config from '../app.config'

// FORMIK & YUP, THOSE WACKY KIDS!
import { Formik } from 'formik'
import validate from './forms/validate-spected'
import getValidationSchema from './forms/getValidationSchema-spected'


const initialValues = {
	email: '',
	password: '',
	passwordConfirmation: '',
	consent: false
}



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
				<div className='form'>
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
					    <input
					      className="form-input"
					      type="text"
					      name="firstName"
					      id="firstName"
					      onChange={handleChange}
					    />
					    <label>Last Name</label>
					    <input
					      className="form-input"
					      type="text"
					      name="lastName"
					      id="lastName"
					      onChange={handleChange}
					    />
					    <label>Password</label>
					    <input
					      className="form-input"
					      type="password"
					      name="password"
					      id="password"
					      onChange={handleChange}
					    />
					    <label>Confirm Password</label>
					    <input
					      className="form-input"
					      name="passwordConfirmation"
					      type="password"
					      id="password"
					      onChange={handleChange}
					    />
			  </div>
			  <button onClick={handleSubmit}>{isSubmitting ? 'Loading...' : 'Become a Wine Explorer!'}</button>
			</div>
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

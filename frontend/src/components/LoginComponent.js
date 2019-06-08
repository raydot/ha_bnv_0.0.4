import React, { Component } from 'react'
import axiosBridge from '../utils/axiosBridge'
//import AuthService from './AuthService'

//import fetch from 'isomorphic-fetch'

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

import { FormErrors } from './FormErrors'

class LoginComponent extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.state= { 
      email: '', 
      password: '',
      formErrors: {email: '', password: ''} ,
      emailValid: false,
      passwordValid: false,
      formValid: false,
      serverErrors: ''
    }
    //this.Auth = new AuthService() // this needs to GO
  }

  render() {
    return (
      <div className='center'>
        <div className='card'>
          <div className="signup-content centerForm">
                      <div className="formErrors">
                        <FormErrors formErrors={this.state.formErrors} />
                      </div>
                      <div className="serverErrors">
                        <p>{  this.state.serverErrors }</p>
                      </div>
                    	<form onSubmit={ this.handleFormSubmit } id="signup-form" className="signup-form centerForm">
                    		<div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
					            <input
					              className='form-input'
					              placeholder='Username (e-mail address)'
					              name='email'
					              type='email' required
                        value={this.state.email}
					              onChange={this.handleChange}
					            />
					        </div>
					        <div className="form-group">
					            <input
					              className='form-input'
					              placeholder='Password'
					              name='password'
					              type='password'
                        value={this.state.password}
					              onChange={this.handleChange}
					            />
					        </div>
					        <div className="form-group">
					            <button className="btn btn--radius-2 btn--blue" type="submit" disabled={!this.state.formValid}>Submit</button>
					        </div>
          </form>
          </div>
        </div>
      </div>
    )
  }

  handleChange(e, username, password){
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value }, () => { this.validateField(name, value) })
  } // handleChange()

  handleFormSubmit(e, username, password) {
    //console.log("formstate:", this.state.formValid)
    e.preventDefault()

    if (this.state.formValid) {

    // THIRD TIME'S THE CHARM!  // This is without async/await (obvs)
    axiosBridge.post('/users/login', {
        email: 'joa@toto.com',
        password: 'huhuhuhu'
    })
      .then(response => {
        console.log(response)
        //dispatch(response)
      })
      .catch(error => {
        console.log('status:', error.response.status)
        //console.log('error!')
        if (error.response.status === 401) {
          this.setState({
            serverErrors: 'This does not appear to be a valid username or password.\nPlease create a membership.'
          })
          console.log(this.state.serverErrors)
        } else {
          console.log('some other server error')
        }
      })

    } else {
      console.log('form invalid!')
    }

  } // handleFormSubmit

  // Handle validation and errors:
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors
    let emailValid = this.state.emailValid
    let passwordValid = this.state.passwordValid

    switch(fieldName) {
      case 'email':
        //FIX THIS!
        //emailValid = value.match(\u005c[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b)
        emailValid = value.length >= 7
        fieldValidationErrors.email = emailValid ? '' : ' is invalid'
        break
      case 'password':
        passwordValid = value.length >= 8
        fieldValidationErrors.password = passwordValid ? '' : ' is too short'
        break
      default:
        console.log('VALIDATEFIELD FAIL!', fieldName)
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm)
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    })
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error')
  }

  // Add redirection if we are already logged in
  // We don't want to stay on the login page if we are logged in, so add this to prevent that.
  componentWillMount() {
    // if (this.Auth.loggedIn())
    //   this.props.history.replace('/')
  }
}

export default LoginComponent
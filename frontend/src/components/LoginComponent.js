import React, { Component } from 'react'
import AuthService from './AuthService'

class LoginComponent extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.Auth = new AuthService()
  }

  render() {
    return (
      <div className='center'>
        <div className='card'>
          <div className="signup-content centerForm">
                    	<form method="POST" id="signup-form" className="signup-form centerForm">
                    		<div className="form-group">
					            <input
					              className='form-input'
					              placeholder='Username'
					              name='username'
					              type='text'
					              onChange={this.handleChange}
					            />
					        </div>
					        <div className="form-group">
					            <input
					              className='form-input'
					              placeholder='Password'
					              name='password'
					              type='password'
					              onChange={this.handleChange}
					            />
					        </div>
					        <div className="form-group">
					            <button class="btn btn--radius-2 btn--blue" type="submit">Submit</button>
					        </div>
          </form>
          </div>
        </div>
      </div>
    )
  }

  handleChange(e){
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  } // handleChange()

  handleFormSubmit(e) {
    e.preventDefault()

    this.Auth.login(this.state.username, this.state.password)
      .then (res => {
        this.props.history.replace('/')
      })
      .catch(err => {
        console.error('ERROR: ', err)
        alert(err)
      })
  } // handleFormSubmit

  // Add redirection if we are already logged in
  // We don't want to stay on the login page if we are logged in, so add this to prevent that.
  componentWillMount() {
    if (this.Auth.loggedIn())
      this.props.history.replace('/')
  }
}

export default LoginComponent
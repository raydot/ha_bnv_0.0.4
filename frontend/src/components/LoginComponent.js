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
          <h1>Login</h1>
          <form>
            <input
              className='form-item'
              placeholder='Username goes here...'
              name='username'
              type='text'
              onChange={this.handleChange}
            />
            <input
              className='form-item'
              placeholder='Password goes here...'
              name='password'
              type='password'
              onChange={this.handleChange}
            />
            <input
              className='form-submit'
              value='SUBMIT'
              type='submit'
            />
          </form>
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
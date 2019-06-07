import React, { Component } from 'react'
//import AuthService from './AuthService'

import fetch from 'isomorphic-fetch'

class LoginComponent extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.state={ username: '', password: '' }
    //this.Auth = new AuthService() // this needs to GO
  }

  render() {
    return (
      <div className='center'>
        <div className='card'>
          <div className="signup-content centerForm">
                    	<form onSubmit={ this.handleFormSubmit } id="signup-form" className="signup-form centerForm">
                    		<div className="form-group">
					            <input
					              className='form-input'
					              placeholder='Username'
					              name='username'
					              type='text'
                        value={this.state.username}
					              onChange={this.handleChange}
					            />
					        </div>
					        <div className="form-group">
					            <input
					              className='form-input'
					              placeholder='Password'
					              name='password'
					              type='password'
                        value={this.password}
					              onChange={this.handleChange}
					            />
					        </div>
					        <div className="form-group">
					            <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
					        </div>
          </form>
          </div>
        </div>
      </div>
    )
  }

  handleChange(e, username, password){
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  } // handleChange()

  handleFormSubmit(e, username, password) {
    e.preventDefault()

    return fetch('http://localhost:3005/users/login/', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        'Content-Type': 'application/JSON'
      }
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response)
        return response;
        
        //window.location.reload() {

      } else {
          console.log(response)
          console.log('something is wrong with the login request')
      } 
    }).catch(err => err)
    // this.Auth.login(this.state.username, this.state.password)
    //   .then (res => {
    //     this.props.history.replace('/')
    //   })
    //   .catch(err => {
    //     console.error('ERROR: ', err)
    //     alert(err)
    //   })

  } // handleFormSubmit

  // Add redirection if we are already logged in
  // We don't want to stay on the login page if we are logged in, so add this to prevent that.
  componentWillMount() {
    // if (this.Auth.loggedIn())
    //   this.props.history.replace('/')
  }
}

export default LoginComponent
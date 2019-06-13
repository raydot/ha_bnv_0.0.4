// Using this as a framework for an Auth HOC
/*
  https://medium.com/@romanchvalbo/how-i-set-up-react-and-node-with-json-web-token-for-authentication-259ec1a90352
*/

import React, { Component } from 'react'
import AuthHelperMethods from './AuthHelperMethods'

export default function withAuth(AuthComponent) {
  const Auth = new AuthHelperMethods()

  return class AuthWrapped extends Component {
    state = {
      confirm: null,
      loaded: false
    }

    // In componentDidMount, do verification before providing entry:
    componentDidMount() {
      if (!Auth.loggedIn()) {
        this.props.history.replace('/login')
      } else {
        // Try to get confirmation message from the Auth helper
        try {
          const confirm = Auth.getConfirm()
          console.log('confirmation is:', confirm)
          this.setState({
            confirm: confirm,
            loaded: true
          })
        } catch (err) {
          // ERROR: print it and log the user out
          console.log(err)
          Auth.logout()
          this.props.history.replace('/login')
        }
      }
    
    } // componentDidMount()

    render() {
      if (this.state.loaded == true) {
        if (this.state.confirm) {
          console.log('confirmed')
          return (
            // Component being used as wrapper (app.js)
            <AuthComponent
              history={this.props.history}
              confirm={this.state.confirm}
            />
          )
        } else {
          console.log('user not confirmed')
          return null
        }
      } else { //state not loaded?!
        return null
      }
    }
  }
}
// https://medium.com/@romanchvalbo/how-i-set-up-react-and-node-with-json-web-token-for-authentication-259ec1a90352

// This is where the methods live that  help us complete the auth.

export default class AuthHelperMethods {
  constructor(domain) {
    // Dev, production, etc...
    this.domain = domain // 'http://localhost:3000' // API SERVER
  }

  login = (username, password, etc) => {

    // get token
    return this.fetch('/login', {
      // method,
      // body
    }).then(res => {
      // set token
      // return whatever
    })
  }

  loggedIn = () => {
    // checks to see if there is a saved token and if it's still valid
  }

  isTokenExpired = token => {
    try {
      // Check that token
    } catch(err) {

    }
  }

  // so far all is well!
  setToken = idToken => {
    // Save token!
  }

  getToken = () => {
    // Get token!
  }

  logout = () => {
    // Clear and delete token
  } 

  getConfirm = () => {
    // decode that token
  }

  fetch = (url, options) => {
    // perform api calls
    const headers = {
      Accept:
      'content-type':
    }

    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken()
    }
  }

  return fetch (url, {
    headers, 
    ...options
  })
    .then(this._checkStatus)
    .then(response => response.json())
  }

  _checkStatus = response => {
    // raises an error if the response status is not a success
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      // raise the alarm!
    }
  }
}
/*******************************
 PLACEHOLDER. NOT USING THIS!!!!
 *******************************/

// Interesting approach, although I'm pretty sure you're not supposed to store JWT's in localstorage
// but should instead store them in cookies.  Or if you DO store them in localstorage then:
// https://security.stackexchange.com/questions/179498/is-it-safe-to-store-a-jwt-in-sessionstorage

const decode = 'jwt-decode'
export default class AuthService{
  // Initialize important variables
  constructor(domain) {
    // pretty sure this should be done with a proxy in package.json
    //console.log('domain:', domain)
    this.domain = domain || 'http://localhost:8080'
    this.fetch = this.fetch.bind(this) // comes with the useful comment "React binding stuff"
    this.login = this.login.bind(this)
    this.getProfile = this.getProfile.bind(this)
  }

  login(username, password) {
    // Get a token from api server using the fetch api
    //console.log('login!')
    //console.log('domain', this.domain)
    return this.fetch(`${this.domain}/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      })
    }).then(res => { //redo with async/await?
      this.setToken(res.token) // set the token in localStorage...why????
      return Promise.resolve(res)
    })
  }

  loggedIn() {
    // Checks if there's a saved token and whether it's still valid
    const token = this.getToken() // Get token from localstorage
    return !!token && !this.isTokenExpired(token) // note says "handwaiving here", whatever that means
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token)
      if (decoded.exp < Date.now() / 1000) { // is token expired
        return true
      } else {
        return false
      }
    }
    catch(err) {
      return false
    }
  }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token')
  }

  getProfile() {
    // Using jwt-decode npm package to decode the token
    return decode(this.getToken())
  }

  fetch(url, options) {
    // performs api calls sending the required authentication headers
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    // Setting Authorization header
    // Authorization: Bearer xxxxxx.xxxxxx.xxxxxx
    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken()
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json())
  }

  _checkStatus(response) {
    // raises an error in case status is not a success
    if (response.status >= 200 && response.status < 300) { // Success status is between 200 and 300
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }
}
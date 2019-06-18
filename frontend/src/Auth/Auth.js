// REQUEST THE PROFILE SCOPE

/*
  To retrieve user information, request a scope of openid profile in the instance of the auth0.WebAuth object.
*/

auth0 = new auth0.WebAuth({
  constructor() {
    this.getProfile = this.getProfile.bind(this)
  }
  // ...
  scope: 'openid profile'

  userProfile

  getProfile(cb) {
    this.auth0.client.userInfo(this.accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile
      }
      cb(err, profile)
    })
  }

  logout() {
    // Remove user profile
    this.userProfile = null
  }

})

// RETRIEVE USER INFORMATION
/*
  Use the client.userInfo method from the auth0.js library to get user information from the /userinfo endpoint.

  Use the following arfuments in the client.userInfo method:

  1.  The user's Access Token
  2.  A callback function with arguments for a potential error and a profile.

  Add a method that calls the client.userInfo method to the Auth service (above)
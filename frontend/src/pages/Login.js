import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Grid, GridContainer} from 'unsemantic'
import { NavLink } from 'react-router-dom'

// OKTA
// import OktaAuth from '@okta/okta-auth-js'
import { withAuth } from '@okta/okta-react'
import LoginForm from '../components/auth/LoginForm'

//AUTH0
// import LoginMainImage from "../../img/login-main-image.jpg"
//import axios from 'axios'



// Login
// import LoginComponent from '../components/LoginComponent'

//import PropTypes from 'prop-types'
//import { connect } from 'react-redux'


// withAuth IS AN OKTA HOC
export default withAuth (
  class Login extends Component {
    constructor(props) {
      super(props)
      this.state = { authenticated: null }
      this.checkAuthentication = this.checkAuthentication.bind(this)
      this.checkAuthentication()
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated()
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated })
      }
    }

    componentDidUpdate() {
      this.checkAuthentiation()
    }

    // AUTH0
     //  //this.logIn = this.logIn.bind(this)
     //  const { isAuthenticated } = this.props.authVar
     //  //console.log(authVar)
     //  console.log('ia?', isAuthenticated())
     //  this.customLogin = this.customLogin.bind(this)
     //  this.login = this.login.bind(this)
     // }

     // customLogin() {
     //  this.props.authVar.customLogin()
     // }

     // login(e) {
     //   e.preventDefault()
     //   this.props.authVar.login()
     // }

     // const axiosTest = () => {
     //  axios.post('foo', {
     //  })
     //  .then(function (response) {
     //    console.log(response)
     //  })
     //  .catch(function (error) {
     //    console.log(error)
     //  })
     // }
    render() {

      if (this.state.authenticated === null) return null

      return this.state.authenticated 
        ? (<Redirect to={{ pathname: './dashboard '}} />)
        : (
            <div>
        		  <div className="smallHeader">
        		  	<div className="titleInfo">
        		  		<h1 className="pageTitle">LOGIN</h1>
              	</div>
              	<div className="hero-overlay"></div>
              	<LoginForm />
              </div>
  	          <div className="content">
  	            <GridContainer>
  	            	<Grid desktop="100">
  	            		 <LoginForm />
  	            	</Grid>
  	            </GridContainer>
  	          </div>
            </div>
          );
    }
  }
)


// SOME STATE MANAGEMENT STUFF STILL FLOATING AROUNG
// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// })
//  
// export default connect(
//   mapStateToProps,
//   { loginUser }
// )(Login)
//export default Login
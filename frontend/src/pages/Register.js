import React, { Component } from 'react'
import { Grid, GridContainer} from 'unsemantic'
import exploreWineCountry from "../img/explore-wine-country.jpg"

//import { Route, NavLink } from 'react-router-dom'

import RegistrationDetails from '../components/RegistrationDetails.js'

// REDUX FOR USER STATE
// import { connect } from 'react-redux'
// import actions from '../redux/actions'

// https://developer.okta.com/blog/2018/02/06/build-user-registration-with-node-react-and-okta

// OKTA
import OktaAuth from '@okta/okta-auth-js'
import { withAuth } from '@okta/okta-react'
import config from '../app.config'


 

export default withAuth(
	class Register extends Component {
		constructor(props) {
			super(props)
			this.state = {
				firstname: '',
				lastname: '',
				email: '',
				password: '',
				sessionToken: null
			}

		this.oktaAuth = new OktaAuth({ url: config.url })
		this.checkAuthentication = this.checkAuthentication.bind(this)
		this.checkAuthentication()

		//this.handleSubmit = this.handleSubmit.bind(this)
		// this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
		// this.handleLastNameChange = this.handleLastNameChange.bind(this)
		// this.handleEmailChange = this.handleEmailChange.bind(this)
		// this.handlePasswordChange = this.handlePasswordChange.bind(this)

		}// constructor

		async checkAuthentication() {
			const sessionToken = await this.props.auth.getIdToken()
			if (sessionToken) {
				this.state({ sessionToken })
			}
		}

		componentDidUpdate() {
			this.checkAuthentication()
		}

		// handleSubmit(e) {
		// 	e.preventDefault()
		// 	fetch('/api/users', {
		// 		method: 'POST',
		// 		headers: {
		// 			Accept: 'application/json',
		// 			'Content-Type': 'application/json'
		// 		},
		// 		body: JSON.stringify(this.state)
		// 	})
		// 		.then(user => {
		// 			this.oktaAuth
		// 				.signIn({
		// 					username: this.state.email,
		// 					password: this.state.password
		// 				})
		// 				.then(res => 
		// 					this.setState({
		// 						sessionToken: res.sessionToken
		// 					})
		// 				)
		// 		})
		// 		.catch(err => console.log)
		// }

		render() {
			if (this.state.sessionToken) {
				this.props.auth.redirect( { sessionToken: this.state.sessionToken })
				return null
			}

	    return (
	      <div>
					<div className="smallHeader">
				  		<div className="titleInfo">
				  			<h1 className="pageTitle">Register</h1>
		      		</div>
				  		<div className="hero-overlay"></div>
				  		<img src={ exploreWineCountry } alt="Explore the Wine Country" className="wineryImage" />
		    	</div> 

		      <div className="mainContent">
		        <div className="content">
		          <GridContainer>
			          	<Grid desktop="100">
				          	<RegistrationDetails uName={ this.props.uName } />
			          	</Grid>
		          </GridContainer>
	          </div>  
	        </div>     
     		</div> 
	    );
	  } // render
	} // class
)// withAuth

// THIS WILL HAVE TO BE CHANGED IF ANYTHING BUT THE REG PAGE NEEDS REDUX 
// ACUTALLY NO IT DOESN'T BUT LEAVING THIS HERE FOR THE FUTURE
//export default connect(store => store, actions)(Register)
import React, { Component } from 'react'
import { Grid, GridContainer} from 'unsemantic'
import exploreWineCountry from "../img/explore-wine-country.jpg"

import { Route, NavLink } from 'react-router-dom'

import RegistrationDetails from '../components/RegistrationDetails.js'

import { withCookies } from 'react-cookie'

//import { Provider } from 'react-redux'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'


//import HomeContainer from '../components/Home'

//import MustardVines from "../img/mustard-vines.jpg"
 
// This needs to be decoupled into a component...






class Register extends Component {
  	constructor(props) {
		super(props)
		//console.log('v?', this.props.location.state.viz)
		//this.handleFormSubmit = this.handleFormSubmit.bind(this)
		// let this.props.newUser = null
		// let this.props.registerUser = null
		// let this.props.withRouter = null
		this.setState({ newUser: null, registerUser: null, withRouter: null})
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			})
		}
	}

	// GET THIS TO PLAY NICE WITH EXISTING REG SCHEME!
	onSubmit = e => {

		// THIS WILL NEED TO BE ACCOUNTED FOR!

		// e.preventDefault()

		// const newUser = {
		// 	name: this.state.name,
		// 	email: this.state.email,
		// 	password: this.state.password,
		// 	password2: this.state.password2
		// }

		this.state.registerUser(newUser, this.props.history)
	}

	render() {
    return (
      <div>
			{/*<Route
				path='/'
				render={ () => <HomeContainer cookies= {this.props.cookies}/>}
			/>*/}
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
	            	
	            	{ /* COMPONENTS GO HERE */ }
	            	<RegistrationDetails />

	            	</Grid>
	            </GridContainer>
	            </div>  
	          </div>     
       		</div> 
    );
  }
} // class

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
})


 
export default connect (
	mapStateToProps,
	{ registerUser }
)(withRouter(Register))
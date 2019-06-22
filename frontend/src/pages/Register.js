import React, { Component } from 'react'
import { Grid, GridContainer} from 'unsemantic'
import exploreWineCountry from "../img/explore-wine-country.jpg"

//import { Route, NavLink } from 'react-router-dom'

import RegistrationDetails from '../components/RegistrationDetails.js'

// REDUX FOR USER STATE
import { connect } from 'react-redux'
import actions from '../redux/actions'




//import HomeContainer from '../components/Home'

//import MustardVines from "../img/mustard-vines.jpg"
 
// This needs to be decoupled into a component...







class Register extends Component {
//   constructor(props) {
// 		super(props)
		
// 	}

	componentWillReceiveProps(nextProps) {
		
	}

	render() {
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
 
export default connect(store => store, actions)(Register)
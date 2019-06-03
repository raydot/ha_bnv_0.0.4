import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"
import { NavLink } from "react-router-dom"
//import MustardVines from "../img/mustard-vines.jpg"
import LoginMainImage from "../img/login-main-image.jpg"

// Login
import LoginComponent from '../components/LoginComponent'

 
class MercuryWinery extends Component {
  render() {
    return (
      <div>
		  <div className="smallHeader">
		  	<div className="titleInfo">
		  		<h1 className="pageTitle">LOGIN</h1>
          	</div>
          	<div className="hero-overlay"></div>
          	<img src={ LoginMainImage } alt="Mustard Vines" className="wineryImage" />
          </div>
          
          
          
	          <div className="content">
	            <GridContainer>
	            	<Grid desktop="100">
	            		<LoginComponent />
	            		<h3 className="center">Not a member? <NavLink>Join now!</NavLink></h3>
	            	</Grid>
	            </GridContainer>
	          </div>


			 
	       </div>
    );
  }
}
 
export default MercuryWinery
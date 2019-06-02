import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"
import { NavLink } from "react-router-dom"
import MustardVines from "../img/mustard-vines.jpg"

// Login
import LoginComponent from '../components/LoginComponent'

 
class MercuryWinery extends Component {
  render() {
    return (
      <div>
		  <div className="smallHeader">
		  	<div className="titleInfo">
		  		<h1 className="pageTitle">Become a Wine Explorer<span className="smallerType">&trade;</span> Member</h1>
          	</div>
          	<div className="hero-overlay"></div>
          	<img src={ MustardVines } alt="Mustard Vines" className="wineryImage" />
          </div>
          
          
          
	          <div className="content">
	            <GridContainer>
	            	<Grid desktop="100">
	            		<LoginComponent />

	            		Not a member?  <NavLink>Join now!</NavLink>

	            	</Grid>
	            </GridContainer>
	          </div>


			  <Grid>
			  	<GridContainer>
	       <p className="smallerType center">* Limited to a case at select wineries | ** Coming 2019 / 2020 | All purchases are non-refundable | Please drink responsibly</p>
	       		</GridContainer>
		      </Grid>
	       </div>
    );
  }
}
 
export default MercuryWinery
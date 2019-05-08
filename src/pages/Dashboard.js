import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"
//import { Route, NavLink } from "react-router-dom"
import { NavLink } from "react-router-dom"


import MustardVines from "../img/mustard-vines.jpg"
 
class Dashboard extends Component {
  render() {
    return (
      <div>
		<div className="noheroImageHeader">
			<div className="content">
		            <GridContainer>
		            	<Grid desktop="100">
							<h1>Welcome <strong>John Spartan</strong></h1>
			  			</Grid>
			  		</GridContainer>
			  		
			  			<ul className="subNav">
			  				<li><a href="#">MY MEMBERSHIP</a></li>
			  				<li><a href="./MyVisits">MY VISITS</a></li>
			  				<li><a href="#">MY DETAILS</a></li>
			  			</ul>
			  			<div className="clear"></div>
			</div>
				  	
		</div>
          
          <div className="mainContent">
          
	          <div className="content">
	            <GridContainer>
	            	<Grid desktop="100">
	            		<p><NavLink to="/our-partners">Thank you John Spartan for becoming a Wine Explorer on this date.</NavLink></p>
	            	</Grid>
	            </GridContainer>
	          </div>
	          
	          <div className="content">
	            <GridContainer>
				  <Grid desktop="33" tablet="33" mobile="100">
				    <h2>Check In History</h2>
				    <p>Since you've joined, you've visited 5 wineries.</p>
				    <a href="#hi" className="button">SEE WINERY HISTORY</a>
				  </Grid>
				  <Grid desktop="33" tablet="33" mobile="100">
				    <h2>Renewal Date</h2>
				    <p>Your Wine Explorer™ Membership will refreshes on DATE HERE</p>
				  </Grid>
				  <Grid desktop="33" tablet="33" mobile="100">
				    <h2>Cancel My Membership</h2>
				    <p>We understand that membership isn't for everyone. We are sorry to see you go, but all you have to do to cancel you're annual membership is to click the button below.</p>
				    <p><a href="#" className="button">CANCEL MEMBERSHIP</a></p>
				  </Grid>
				</GridContainer>
	          </div>
	       
	       </div>
       </div> // Close mainContent
    );
  }
}
 
export default Dashboard
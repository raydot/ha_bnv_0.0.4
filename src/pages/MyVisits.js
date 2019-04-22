import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"

import MustardVines from "../img/mustard-vines.jpg"
 
class Dashboard extends Component {
  render() {
    return (
      <div>
		<div className="noheroImageHeader">
			<div className="content">
		            <GridContainer>
		            	<Grid desktop="100">
							<h1>Wineries I Have Visited</h1>
			  			</Grid>
			  		</GridContainer>
			  		
			  			<ul className="subNav">
			  				<li><a href="#">MY MEMBERSHIP</a></li>
			  				<li><a href="#">MY VISITS</a></li>
			  				<li><a href="#">MY DETAILS</a></li>
			  			</ul>
			  			<div className="clear"></div>
			</div>
				  	
		</div>
          
          <div className="mainContent">
          
	          <div className="content">
	            <GridContainer>
	            	<Grid desktop="100">
	            		<p>Thank you John Spartan for becoming a Wine Explorer on this date.</p>
	            	</Grid>
	            </GridContainer>
	          
	          
	          <div className="content">
	          <GridContainer>
	            	<Grid desktop="15">
	            		<h2>Date</h2>
	            	</Grid>
	            	<Grid desktop="20">
	            		<h2>Winery Visited</h2>
	            	</Grid>
	            	<Grid desktop="25">
	            		<h2>Favorite Wine</h2>
	            	</Grid>
	            	<Grid desktop="40">
	            		<h2>Notes</h2>
	            	</Grid>
	            </GridContainer>
	            
	            <GridContainer className="visitList">
	            	<Grid desktop="15">
	            		<p>Jan. 06, 2019<br />
	            		14:44</p>
	            	</Grid>
	            	<Grid desktop="20">
	            		<p>Ramazzotti Winery</p>
	            	</Grid>
	            	<Grid desktop="25">
	            		<p>That Red Blend, Tractor</p>
	            	</Grid>
	            	<Grid desktop="40">
	            		<p>Oh my gosh. This was absolutely amazing. Wow. I cant wait to go back there. Probably the best experience of the entire day!</p>
	            	</Grid>
	            </GridContainer>
	            
	            <GridContainer className="visitList">
	            	<Grid desktop="15">
	            		<p>Jan. 06, 2019<br />
	            		14:44</p>
	            	</Grid>
	            	<Grid desktop="20">
	            		<p>Ramazzotti Winery</p>
	            	</Grid>
	            	<Grid desktop="25">
	            		<p>That Red Blend, Tractor</p>
	            	</Grid>
	            	<Grid desktop="40">
	            		<p>Oh my gosh. This was absolutely amazing. Wow. I cant wait to go back there. Probably the best experience of the entire day!</p>
	            	</Grid>
	            </GridContainer>
	          </div>
	       </div>
	       </div>
       </div> // Close mainContent
    );
  }
}
 
export default Dashboard
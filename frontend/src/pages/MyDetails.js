import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"

//import MustardVines from "../img/mustard-vines.jpg"
 
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
	          </div>
	          
	          <div className="content">
	            <GridContainer>
	            	<Grid desktop="100">
		            	<section className="contactDetails">
		            		<h2 className="label">Personal details</h2>
		            		<div className="contactDetails">
		            			<div className="leftCol label">Name:</div>
								<div className="leftCol detail">John Spartan</div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label">Telephone:</div>
								<div className="leftCol detail">N/A</div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label">Your name on the membership:</div>
								<div className="leftCol detail">John Spartan</div>
		            		</div>
		            	</section>
		            	
		            	<section className="contactDetails">
		            		<h2 className="label">Account Details</h2>
		            		<div className="contactDetails">
		            			<div className="leftCol label">Username:</div>
								<div className="leftCol detail">john316</div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label">Password:</div>
								<div className="leftCol detail">********* <a>Edit</a></div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label">Security Question:</div>
								<div className="leftCol detail">What is your mothers maiden name? <a>Edit</a></div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label">E-mail:</div>
								<div className="leftCol detail"><a>Edit</a></div>
		            		</div>
		            	</section>
		            	
		            	<section className="contactDetails">
		            		<h2 className="label">Address</h2>
		            		<div className="contactDetails">
		            			<div className="leftCol label">Company Name::</div>
								<div className="leftCol detail"> </div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label">Address 1:</div>
								<div className="leftCol detail"> </div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label">Address 2:</div>
								<div className="leftCol detail"> </div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label">Address 3:</div>
								<div className="leftCol detail"> </div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label">City</div>
								<div className="leftCol detail"> </div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label">State</div>
								<div className="leftCol detail"> </div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label">ZIP</div>
								<div className="leftCol detail"> </div>
		            		</div>
		            	</section>
		            	
		            	<section className="contactDetails">
		            		<h2 className="label">Billing Details</h2>
		            		<div className="contactDetails">
		            			<div className="leftCol label">Renewal Date</div>
								<div className="leftCol detail">July 3, 2019</div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label">Credit Card</div>
								<div className="leftCol detail">********* <a>Update</a></div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label">Expiry Date:</div>
								<div className="leftCol detail">01 / 20</div>
		            		</div>
		            		
		            	</section>
	            	</Grid>
	            </GridContainer>
	          </div>
	          
	          	       
	       </div>
       </div> // Close mainContent
    );
  }
}
 
export default Dashboard
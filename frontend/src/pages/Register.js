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
			            			<div className="leftCol label" htmlFor="firstName">First Name:</div>
												<div className="leftCol detail"><input type="text" name="firstName"  placeholder="First Name"/></div>
			            		</div>
  		            		<div className="contactDetails">
  		            			<div className="leftCol label" htmlFor="lastName">Last Name:</div>
  											<div className="leftCol detail"><input type="text" name="lastName" placeholder="Last Name"/></div>
  		            		</div>

		            		<div className="contactDetails">
		            			<div className="leftCol label">Your name on the membership:</div>
								<div className="leftCol detail">John Spartan</div>
		            		</div>

		            		<div className="contactDetails">
		            			<div className="leftCol label" htmlFor="email">E-mail address:</div>
											<div className="leftCol detail"><input type="text" name="email" placeholder="E-mail Address"/></div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label" htmlFor="password">Password:</div>
											<div className="leftCol detail"><input type="password" name="password1" placeholder="Password"/></div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label" htmlFor="password2">Confirm Password:</div>
											<div className="leftCol detail"><input type="password" name="password2" placeholder="Confirm Password"/></div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label" htmlFor="secques">Security Question:</div>
											<div className="leftCol detail">
												<select>
													<option value="secques1">Lorem ipsum?</option>
													<option value="secques2">Dolor est?</option>
													<option value="secques3">Sit amet?</option>
												</select>
											</div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label" htmlFor="seqans">Security Answer:</div>
											<div className="leftCol detail"><input type="text" name="secans" placeholder="Security Answer"/></div>
		            		</div>
		            	</section>
		            	
{/*		            	<section className="contactDetails">
		            		<h2 className="label">Account Details</h2>
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
		            	</section>*/}
		            	
		            { /*  FREE REG ENDS HERE!!! */ } 

		            	<section className="contactDetails">
		            		<h2 className="label">Address</h2>
		            		<div className="contactDetails">
		            			<div className="contactDetails">
			            			<div className="leftCol label" htmlFor="seqans">Company Name:</div>
												<div className="leftCol detail"><input type="text" name="coname" placeholder="Company Name"/></div>
			            		</div>
		            			<div className="contactDetails">
			            			<div className="leftCol label" htmlFor="seqans">Address 1:</div>
												<div className="leftCol detail"><input type="text" name="addr1" placeholder="Address 1"/></div>
			            		</div>
		            			<div className="contactDetails">
			            			<div className="leftCol label" htmlFor="seqans">Address 2:</div>
												<div className="leftCol detail"><input type="text" name="addr2" placeholder="Address 2"/></div>
			            		</div>
		            			<div className="contactDetails">
			            			<div className="leftCol label" htmlFor="seqans">Address 3:</div>
												<div className="leftCol detail"><input type="text" name="addr3" placeholder="Address 3"/></div>
			            		</div>
		            			<div className="contactDetails">
			            			<div className="leftCol label" htmlFor="seqans">City:</div>
												<div className="leftCol detail"><input type="text" name="city" placeholder="City"/></div>
			            		</div>
		            			<div className="contactDetails">
			            			<div className="leftCol label" htmlFor="seqans">State:</div>
												<div className="leftCol detail"><input type="text" name="state" placeholder="State"/></div>
			            		</div>
		            			<div className="contactDetails">
			            			<div className="leftCol label" htmlFor="seqans">Zip:</div>
												<div className="leftCol detail"><input type="text" name="zip" placeholder="Zip"/></div>
			            		</div>

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
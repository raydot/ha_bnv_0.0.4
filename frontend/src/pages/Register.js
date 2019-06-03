import React, { Component } from 'react'
import { Grid, GridContainer} from 'unsemantic'

import { Route, NavLink } from 'react-router-dom'

//import MustardVines from "../img/mustard-vines.jpg"
 
class Register extends Component {
  	constructor(props) {
		super(props)
		//console.log('v?', this.props.location.state.viz)
	}

	render() {
    return (
      <div>
		<div className="noheroImageHeader">
			<div className="content">
		            <GridContainer>
		            	<Grid desktop="100">
							<h1>Registration</h1>
			  			</Grid>
			  		</GridContainer>
			  		
			  			{/*<ul className="subNav">
			  				<li><NavLink to="#">MY MEMBERSHIP</NavLink></li>
			  				<li><NavLink to="#">MY VISITS</NavLink></li>
			  				<li><NavLink to="#">MY DETAILS</NavLink></li>
			  			</ul>*/}
			  			<div className="clear"></div>
			</div>
				  	
		</div>
          
          <div className="mainContent">
          
	          
	          
	          <div className="content">
	            <GridContainer>
	            	<Grid desktop="100">
	            	
	            	<div className="signup-content">
                    	<form method="POST" id="signup-form" className="signup-form">
                        	<h2 className="form-title">Create account</h2>
							<div className="form-group">
								<input type="text" className="form-input" name="firstName" placeholder="First Name"/>
							</div>
							<div className="form-group">
								<input type="text" className="form-input" name="lastName" placeholder="Last Name"/>
							</div>
							
							<div className="form-group">
								<input type="text" className="form-input" name="email" placeholder="E-mail Address"/>
							</div>
							
							<div className="form-group">
								<input type="password" className="form-input" name="password1" placeholder="Password"/>
							</div>
							
							<div className="form-group">
								<input type="password" className="form-input" name="password2" placeholder="Confirm Password"/>
							</div>
							
							<div className="form-group">
	                            <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
	                            <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <NavLink to="#" className="term-service">Terms of service</NavLink></label>
							</div>
							
							<div className="form-group">
					            <button className="btn btn--radius-2 btn--blue" type="submit">SIGN UP</button>
					        </div>
						</form>
					</div>
					
					<div className="signup-content">
                    	<form method="POST" id="signup-form" className="signup-form">
                        	<h2 className="form-title">Mailing Address</h2>
							<div className="form-group">
								<input type="text" className="form-input" name="coname" placeholder="Company Name"/>
							</div>
							
							<div className="form-group">
								<input type="text" className="form-input" name="addr1" placeholder="Address 1"/>
							</div>
							
							<div className="form-group">
								<input type="text" className="form-input" name="addr2" placeholder="Address 2"/>
							</div>
							
							<div className="form-group">
								<input type="text" className="form-input" name="addr3" placeholder="Address 3"/>
							</div>
							
							<div className="form-group">
								<input type="text" className="form-input" name="city" placeholder="City"/>
							</div>
							
							<div className="form-group">
	                            <input type="text" className="form-input" name="state" placeholder="State"/>
							</div>
							
							<div className="form-group">
	                            <input type="text" className="form-input" name="zip" placeholder="Zip"/>
							</div>
							
							<div className="form-group">
					            <button className="btn btn--radius-2 btn--blue" type="submit">SIGN UP</button>
					        </div>
						</form>
					</div>
					
					
					<div className="signup-content">
                    	<form method="POST" id="signup-form" className="signup-form">
                        	<h2 className="form-title">Mailing Address</h2>
							<div className="form-group">
								<input type="text" className="form-input" name="coname" placeholder="Company Name"/>
							</div>
							
							<div className="form-group">
								<input type="text" className="form-input" name="addr1" placeholder="Address 1"/>
							</div>
							
							<div className="form-group">
								<input type="text" className="form-input" name="addr2" placeholder="Address 2"/>
							</div>
							
							<div className="form-group">
								<input type="text" className="form-input" name="addr3" placeholder="Address 3"/>
							</div>
							
							<div className="form-group">
								<input type="text" className="form-input" name="city" placeholder="City"/>
							</div>
							
							<div className="form-group">
	                            <input type="text" className="form-input" name="state" placeholder="State"/>
							</div>
							
							<div className="form-group">
	                            <input type="text" className="form-input" name="zip" placeholder="Zip"/>
							</div>
							
							<div className="form-group">
                            <input type="submit" name="submit" id="submit" className="form-submit" value="Sign up"/>
                        </div>
						</form>
					</div>
	            	
	            	
		            		
			            	
							
							
		            		
{/*		            		<div className="contactDetails">
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
		            		</div>*/}
		            	
{/*		            	<section className="contactDetails">
		            		<h2 className="label">Account Details</h2>
		            		<div className="contactDetails">
		            			<div className="leftCol label">Password:</div>
								<div className="leftCol detail">********* <NavLink>Edit</NavLink></div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label">Security Question:</div>
								<div className="leftCol detail">What is your mothers maiden name? <NavLink>Edit</NavLink></div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label">E-mail:</div>
								<div className="leftCol detail"><NavLink>Edit</NavLink></div>
		            		</div>
		            	</section>*/}
		            	
		            { /*  FREE REG ENDS HERE!!! */ } 

		            	<section className="contactDetails">
		            		
			            	
			            		

		            		
		            	</section>
		            	
		            	<section className="contactDetails">
		            		<h2 className="label">Billing Details</h2>
		            		<div className="contactDetails">
		            			<div className="leftCol label">Renewal Date</div>
								<div className="leftCol detail">July 3, 2019</div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label">Credit Card</div>
								<div className="leftCol detail">********* <NavLink to='#'>Update</NavLink></div>
		            		</div>
		            		<div className="contactDetails">
		            			<div className="leftCol label">Expiry Date:</div>
								<div className="leftCol detail">01 / 20</div>
		            		</div>
		            		
		            	</section>
	            	</Grid>
	            </GridContainer>
	            
	            <div className="signup-content">
                    <form method="POST" id="signup-form" className="signup-form">
                        <h2 className="form-title">Create account</h2>
                        <div className="form-group">
                            <input type="text" className="form-input" name="name" id="name" placeholder="Your Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-input" name="email" id="email" placeholder="Your Email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-input" name="password" id="password" placeholder="Password"/>
                            <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password"></span>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-input" name="re_password" id="re_password" placeholder="Repeat your password"/>
                        </div>
                        <div className="form-group">
                            <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                            <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <NavLink to="#" className="term-service">Terms of service</NavLink></label>
                        </div>
                        <div className="form-group">
                            <input type="submit" name="submit" id="submit" className="form-submit" value="Sign up"/>
                        </div>
                    </form>
                    <p className="loginhere">
                        Have already an account ? <NavLink to="#" className="loginhere-link">Login here</NavLink>
                    </p>
                </div>
	          </div>
	          
	          	       
	       </div>
       </div> // Close mainContent
    );
  }
}
 
export default Register
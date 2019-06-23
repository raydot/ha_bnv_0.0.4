import React, { Component } from 'react'
//import { Grid, GridContainer} from 'unsemantic'

//import { Route, NavLink } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
//import MustardVines from "../img/mustard-vines.jpg"
 
class RegistrationDetails extends Component {

		// constructor(props) {
		// 	super(props)
		// 	//console.log('RegD Props:', this.props)
		// 	//console.log('RegD uName:', this.props.uName)
		// 	//console.log('uName stringify', JSON.stringify(this.props.uName.uName))
		// 	const this.myUname = JSON.stringify(this.props.uName.uName)
		// 	//console.log('mit const:', myUname )

		// }


	render() {
    	return (
			<div className="signup-content">
            	<form method="POST" id="signup-form" className="signup-form">
                	<h2 className="form-title">Create account</h2>
                	<h2>We need text like you are joining Wine Expl for [term] kinda thing.</h2>
					<div className="form-group">
						<input type="text" className="form-input" name="firstName" placeholder="First Name"/>
					</div>
					<div className="form-group">
						<input type="text" className="form-input" name="lastName" placeholder="Last Name"/>
					</div>
					
					<div className="form-group">
						<input type="text" className="form-input" name="email" readOnly placeholder={ this.props.uName }/>
					</div>
					
					<div className="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                        <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree to the <NavLink to="tos" className="term-service">Terms of service</NavLink></label>
					</div>
					
					<div className="form-group">
			            <button className="btn btn--radius-2 btn--blue" type="submit">SIGN UP</button>
			        </div>
				</form>
			</div>
    	);
  	}
}
 
export default RegistrationDetails
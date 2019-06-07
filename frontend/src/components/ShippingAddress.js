import React, { Component } from 'react'
import { Grid, GridContainer} from 'unsemantic'

import { Route, NavLink } from 'react-router-dom'

//import MustardVines from "../img/mustard-vines.jpg"
 
class ShippingAddress extends Component {
  	constructor(props) {
		super(props)
		//console.log('v?', this.props.location.state.viz)
	}

	render() {
    	return (
			<div className="signup-content">
            	<form id="signup-form" className="signup-form">
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
    	);
  	}
}
 
export default ShippingAddress
import React, { Component } from 'react'
import { Grid, GridContainer} from 'unsemantic'
import { NavLink } from 'react-router-dom'
import MustardVines from '../img/mustard-vines.jpg'
import PurchaseDetails from '../components/PurchaseDetails'

 
class Purchase extends Component {
  render() {
    return (
      <div>
			  <div className="smallHeader">
			  	<div className="titleInfo">
			  		<h1 className="pageTitle">Purchase a Membership</h1>
	      	</div>
	      	<div className="hero-overlay"></div>
	      	<img src={ MustardVines } alt="Mustard Vines" className="wineryImage" />
	      </div>
	          
	      <div className="mainContent checkout-form">
	        <div className="content">
	          <GridContainer>
	          	<Grid desktop="50">
	          		<PurchaseDetails />
	          	</Grid>
	          	<Grid desktop="50">
	          		<h3>Your Purchase</h3>
		          	<table>
						<thead>
							<tr>
								<th><strong>Product</strong></th>
								<th><strong>Total</strong></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1 Year Membership</td>
								<td>$250</td>
							</tr>
							<tr rowSpan="2">
								<td>Automatically renews on (date) <br />
									or put date select box.
								</td>
							</tr>
						</tbody>
					</table>
					<h3>Have a coupon?</h3>
						    <input
						      className="form-input"
							  type="text"
						    />
					<h3>Pay Us B!tch</h3>
	          	</Grid>
	          </GridContainer>
	        </div>
		   </div>
	   </div>
    )
  }
}
 
export default Purchase
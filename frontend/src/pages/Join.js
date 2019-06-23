import React, { Component } from 'react'
//import { Grid, GridContainer} from 'unsemantic'
//import { Route, NavLink } from "react-router-dom"
//import { Link, NavLink } from 'react-router-dom'

import  { NavLink } from 'react-router-dom'

//import MustardVines from '../img/mustard-vines.jpg'
import foleyWinery from '../img/foley-winery.jpg'
 
class Join extends Component {
	// handleSubmit(event) {
	// 	event.preventDefault()
	// 	const data = new FormData(event.target)
	
	// 	console.log(data)

	// 	// fetch('/register', {
	// 	// 	method: 'GET',
	// 	// 	body: data
	// 	// })
	// }

	// constructor(props) {
	// 		super(props)
	// 		//console.log('v?', this.props.location.state.viz)
	// }

  render() {
    return (
      <div>
		  <div className="smallHeader">
		  	<div className="titleInfo">
		  		<h1 className="pageTitle">Become a Wine Explorer<span className="smallerType">&trade;</span> Member</h1>
          	</div>
          	<div className="hero-overlay"></div>
          	<img src={ foleyWinery } alt="Foley Winery" className="wineryImage" />
		  	</div>
          
          
          
          
          
          
	          <div className="content centeredType">
	          
<div className="snip1214">
  <div className="plan">
    <h3 className="plan-title">
      Free Membership
    </h3>
    <div className="plan-cost"><span className="plan-price">$0</span></div>
    <div className="plan-select"><NavLink to="/">Sign Up</NavLink></div>
    <ul className="plan-features">
      <li><i className="ion-checkmark"> </i>Read Exclusive Articles on BNV</li>
      <li><i className="ion-checkmark"> </i>Check-in Ability in-app</li>
      <li><i className="ion-checkmark"> </i>Log of wineries visited</li>
    </ul>
  </div>
  <div className="plan">
    <h3 className="plan-title">
      Just for a Day
    </h3>
    <div className="plan-cost"><span className="plan-price">$80</span></div>
    <div className="plan-select"><NavLink to="/">Buy Now</NavLink></div>
    <ul className="plan-features">
      <li><i className="ion-checkmark"> </i>Read Exclusive Articles on BNV</li>
      <li><i className="ion-checkmark"> </i>Check-in Ability in-app</li>
      <li><i className="ion-checkmark"> </i>Log of wineries visited</li>
      <li><i className="ion-checkmark"> </i>Complimentary Tastings at select wineries + guest for 1 day</li>
      <li><i className="ion-checkmark"> </i>25% off any reserve tasting at select wineries for 1 day</li>
      <li><i className="ion-checkmark"> </i>10% at select wineries + guest for 1 day</li>
      <li><i className="ion-checkmark"> </i>In-app digital membership card</li>
      <li><i className="ion-checkmark"> </i>Additional 5% off purchases the day you join the wine club, for 1 day</li>
    </ul>
  </div>
  <div className="plan">
    <h3 className="plan-title">
      For 3 Days
    </h3>
    <div className="plan-cost"><span className="plan-price">$180</span></div>
    <div className="plan-select"><NavLink to='/'>Buy Now</NavLink></div>
    <ul className="plan-features">
      <li><i className="ion-checkmark"> </i>Read Exclusive Articles on BNV</li>
      <li><i className="ion-checkmark"> </i>Check-in Ability in-app</li>
      <li><i className="ion-checkmark"> </i>Log of wineries visited</li>
      <li><i className="ion-checkmark"> </i>Complimentary Tastings at select wineries + guest for 3 days</li>
      <li><i className="ion-checkmark"> </i>25% off any reserve tasting at select wineries for 3 days</li>
      <li><i className="ion-checkmark"> </i>10% at select wineries + guest for 3 days</li>
      <li><i className="ion-checkmark"> </i>In-app digital membership card</li>
      <li><i className="ion-checkmark"> </i>Additional 5% off purchases the day you join the wine club, for 3 days</li>
    </ul>
  </div>
  <div className="plan featured">
    <h3 className="plan-title">
      Yearly Membership
    </h3>
    <div className="plan-cost"><span className="plan-price">$250</span><span className="plan-type">/ Yearly</span></div>
    <div className="plan-select"><NavLink to='/'>BUY NOW</NavLink></div>
    <ul className="plan-features">
      <li><i className="ion-checkmark"> </i>Read Exclusive Articles on BNV</li>
      <li><i className="ion-checkmark"> </i>Check-in Ability in-app</li>
      <li><i className="ion-checkmark"> </i>Log of wineries visited</li>
      <li><i className="ion-checkmark"> </i>Complimentary Tastings at select wineries + guest for an entire year</li>
      <li><i className="ion-checkmark"> </i>25% off any reserve tasting at select wineries for an entire year</li>
      <li><i className="ion-checkmark"> </i>10% at select wineries + guest for an entire year</li>
      <li><i className="ion-checkmark"> </i>In-app digital membership card</li>
      <li><i className="ion-checkmark"> </i>Additional 5% off purchases the day you join the wine club, for an entire year</li>
      <li><i className="ion-checkmark"> </i>Discounts on dining</li>
      <li><i className="ion-checkmark"> </i>Discounts on lodging</li>
      <li><i className="ion-checkmark"> </i>Discounts on partner wine events</li>
      <li><i className="ion-checkmark"> </i>Discounts on BNV events</li>
    </ul>
    
  </div>
</div>

<div className="clear"></div>
	          </div>
	          
	            
</div> 
    );
  }
}
 
export default Join
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
	          
	      <div className="mainContent">
	        <div className="content synopsis">
	          <GridContainer>
	          	<Grid desktop="100">
	          		<PurchaseDetails />
	          	</Grid>
	          </GridContainer>
	        </div>
		   </div>
	   </div>
    )
  }
}
 
export default Purchase
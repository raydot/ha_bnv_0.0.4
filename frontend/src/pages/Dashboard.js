import React, { Component } from 'react'
import { Grid, GridContainer} from 'unsemantic'
import { NavLink } from 'react-router-dom'

import exploreWineCountry from '../img/explore-wine-country.jpg'
import digitalCard from '../img/wine-explorer-digital-card.png'

 
class Dashboard extends Component {
  render() {
    return (
      <div>
		<div className="smallHeader">
		  	<div className="titleInfo">
		  		<h1 className="pageTitle">Welcome John Spartan</h1>
          	</div>
          	
          	<div className="hero-overlay"></div>
          	<img src={ exploreWineCountry } alt="Explore the Wine Country" className="wineryImage" />
          	<ul className="subNav">
			  				<li><NavLink to='/'>MY MEMBERSHIP</NavLink></li>
			  				<li><NavLink to='/'>MY VISITS</NavLink></li>
			  				<li><NavLink to='/'>MY DETAILS</NavLink></li>
			  			</ul>
			  			<div className="clear"></div>
          </div>
				  	
          
          <div className="mainContent">
          
	          
	          
	          <div className="content greyBG">
	          
	          <GridContainer>
	            	<Grid desktop="100">
	            		<h2>A Snapshot</h2>
	            	</Grid>
	            </GridContainer>
	          
	          
	            <GridContainer>
	            	<Grid desktop="30">
	            		
	            		
	            		<img src={ digitalCard } alt="Digital Membership Card" className="imgFullCol" />
	            		<p><strong>Show Digital Membership Card to Winery</strong></p>
	            		<p>Only show image if yearly membership or if dates are current</p>
	            	</Grid>
	            	
	            	<Grid desktop="70">
	            		<h3>My Plan:</h3>
	            		<p><em>Your membership refreshes 08 Jul 2022</em></p>
	            		<p>or</p>
	            		<p>Your membership runs from July 1 2019 to July 4 2019</p>
	            		<p>or</p>
	            		<p>Your currently on the free membership plan. Upgrade to start utilizing the discounts full membership has to offer.</p>
	            	</Grid>
	            </GridContainer>
	            
	            </div>
	            
	            
	            
	            <GridContainer>
	            	<Grid desktop="100">
	            		<h2>Upcoming Events</h2>
	            		<p>There are none at this time. But keep checking back.</p>
	            	</Grid>
	            </GridContainer>
	          </div>
	          
	          
	          
	          	       
	       
       </div> // Close mainContent
    );
  }
}
 
export default Dashboard
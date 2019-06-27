import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"
import { NavLink } from 'react-router-dom'

import MustardVines from "../img/mustard-vines.jpg"

 
class Membership extends Component {
  render() {
    return (
      <div>
		  <div className="smallHeader">
		  	<div className="titleInfo">
		  		<h1 className="pageTitle">Wine Explorer Benefits</h1>
          	</div>
          	<div className="hero-overlay"></div>
          	<img src={ MustardVines } alt="Mustard Vines" className="wineryImage" />
          </div>
          
          <div className="mainContent">
          
	          <div className="content synopsis">
	            <GridContainer>
	            	<Grid desktop="100">
	            		<p>Beyond Napa Valley’s Wine Explorer membership allows you to access a curated list of participating wineries with exclusive discounts. This membership is for the wine explorer who wants to get out and explore the wine regions of the world.</p>
	            		<p>

With membership you’ll get the following:</p>
	            	</Grid>
	            </GridContainer>
	          </div>
	          
	          <div className="content greyBG">
	            <GridContainer>
				  <Grid desktop="50">
				    <h3>Complimentary tasting for you + guest</h3>
				    <p>With our membership, all of your tastings are complimentary as well as your guest. We want you to get out and explore without the worry of what the tasting fee might be.</p>
				    <h3>25% off enhanced / reserve tasting</h3>
				    <p>Have you ever been to a winery where you were tempted to try a reserve flight of wine but the cost prohibited you from trying it? With the card, we bring the cost down for you, allowing you to go ahead and try that reserve flight of wine.</p>
				  </Grid>
				  <Grid desktop="50">
				    <h3>10% off Wine Purchases</h3>
				    <p>Find a wine you like? Awesome. Grab it. Our membership allows you to purchase all wine at the winery for 10% off. From the most widely distributed to the reserve blend, you get it all at a reduced price.</p>
				    
				    <h3>Additional 5% off your wine purchase the day you join the wine club*</h3>
				    <p>Sometimes you just fall in love with all of the wine a winery has to offer. The best way to enjoy the wines at a greater discount is to join the wine club. We want to make the experience a little better by giving you an additional 5% of the winery’s discount when joining.</p>
				    
				    <p className="smallerType">* Limited to a case of wine at select wineries.</p>
				  </Grid>
				</GridContainer>
	          </div>
	       
	       
	       <div className="smallHeader">
		  	<div className="titleInfo">
		  		<h2 className="pageTitle">And yes! There is an app for this!</h2>
          	</div>
          	<div className="hero-overlay"></div>
          	<img src={ MustardVines } alt="Mustard Vines" className="wineryImage" />
          </div>
          
          <div className="mainContent extraMargin">
          <div className="content">
	            <GridContainer>
				  <Grid desktop="50">
				    <h3>An app for easy access</h3>
				    <p>Have your phone? You’ve got your access. Just pull up our app and show your membership to the tasting room staff. That’s it. You’re in!</p>
				    <h3>Check-in & Record notes of your Tasting experience</h3>
				    <p>We give you the ability to record notes of wineries you’ve visited, making your notes easily accessible. Ever forget a particular red blend or varietal you tried and like? With our journal feature, you can quickly log notes of your tasting adventures.</p>
				  </Grid>
				  <Grid desktop="50">
				    <h3>Easy access to a History of the Wineries You’ve Visited</h3>
				    <p>Have you ever been home telling a friend about a winery that was absolutely amazing but you’re blanking on the name of it? Our check-in feature of our app logs the wineries you’ve been to, allowing you to quickly review where you’ve gone tasting.</p>
				    
				    <h3>Wine maps!</h3>
				    <p>Who doesn’t love a good wine map? Our website features a map of participating wineries and restaurants as well as on our app as well.</p>
				    
				    <p className="smallerType">* Limited to a case of wine at select wineries.</p>
				  </Grid>
				</GridContainer>
	          </div>
	      </div>
	      
	      <div className="content synopsis center">
	            <GridContainer>
				  <Grid desktop="100">
				  <p>With every winery our parter list, we've gone out and tried the wine. Only wineries we've deemed worthy of the Wine Explorer Membership™ we've asked to be a part of our partnership. We want you to have the best experience possible!'</p>
				  </Grid>
				  <Grid desktop="100">
				  <NavLink to="/purchase" className="purchase">Become a Wine Explorer Member</NavLink>
				  </Grid>
				</GridContainer> 
				
				</div> 
				<div className="smallHeader">
		  	<div className="titleInfo">
		  		<h2 className="pageTitle">But wait, there is more!</h2>
          	</div>
          	<div className="hero-overlay"></div>
          	<img src={ MustardVines } alt="Mustard Vines" className="wineryImage" />
          </div>
          
          <div className="mainContent extraMargin">
          <div className="content">
	            <GridContainer>
	            <h2 className="center">Coming in 2019 / 2020</h2>
				  <Grid desktop="50">
				    <h3>No corkage at local restaurants with local wine</h3>
				    <p>Find a bottle you think would go great at dinner? Awesome! Our partner restaurants have agreed to waive your corkage fee if you bring a local bottle into a local restaurant. Coming soon!</p>
				    <h3>Discounts on hotel stays</h3>
				    <p>If you’re traveling for the weekend, you’re probably going to stay somewhere. We’ve working with local hotels to ensure you stay as close to the grapes and tasting rooms as possible. Coming soon!
</p>
				  </Grid>
				  <Grid desktop="50">
				    <h3>Discounts on chauffeured transportation</h3>
				    <p>Drink responsibility and please don’t drive drunk. We want you to have a safe wine tasting experience. That’s why we’ve partnered with transportation companies to get you to the tasting rooms safe and sound. Just mention you’re a Wine Explorer card member and receive your discount. Coming soon!
</p>
				    
				    <h3>Discounts on wine events</h3>
				    <p>We’ve working to partner with wine events to extend your Wine Explorer Card go even further. Throughout the year, we will have discounts to wine events that include our wineries. Coming soon!</p>
				  </Grid>
				</GridContainer>
	          </div>
	      </div>
	      <div className="content">
	            <GridContainer>
				  <Grid desktop="75">
				  <p>I love wine tasting at the actual winery because they normally don’t distribute all their wines, so going to a winery is the only place to taste their entire portfolio. Where do you start? What are the costs? Will the wine be any good? Tasting fees can easily sneak up on you, and that’s not even the cost of the wine. I wanted a program that was all about wine exploration—about getting out to the wine regions and trying and exploring.</p>

<p>The Wine Explorer Membership™ is a curated list of wineries that are somewhat under the radar. They are the hidden gems, the ones you might have missed looking at a wine map. With the card, you can taste gratis, try new wines you might have not normally ventured to taste and expand your winery exploration. </p>
				  </Grid>
				  <Grid desktop="25">
				  <p>Picture of Haydn</p>
				  <NavLink to="/purchase" className="purchase">Become a Wine Explorer Member</NavLink>
				  </Grid>
				</GridContainer> 
				
				</div> 
	       </div>
       </div> // Close mainContent
    );
  }
}
 
export default Membership
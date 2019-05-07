import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"

import exploreWineCounty from "../img/explore-wine-country.jpg"
import nallewinery from "../img/nalle-winery.jpg"
import tastingRoom from "../img/tasting-room.jpg"

 
class Home extends Component {
  render() {
    return (
      <div>
		<div className="bigImageHeader">
		  
		  	<div className="titleInfo">
		  		<h1 className="pageTitle">Experience the Wine World in a whole new way as a Wine Explorer™</h1>
          	</div>
          	
          	<div className="hero-overlay"></div>
          	<img src={ exploreWineCounty } alt="Mustard Vines" className="wineryImage" />
          </div>
		
		<GridContainer><h2 className="center">Have you looked at a wine map and thought, “Where do I start?”</h2>
	            	<Grid desktop="50">
	            	
	            	<p>We have as well. That is why at Beyond Napa Valley created the Wine Explorer Membership. It’s the best way to explore the wine country! The wine explorer™ membership allows you to walk in with a guest, taste wine, buy wine and sign up for wine clubs, all with discounts.</p>
	            	</Grid>
	            	<Grid desktop="50">
	            		(Picture of tasting room)
	            	</Grid>
	    </GridContainer>
	    
	    
	    
	    <GridContainer><h2 className="center">Walk in and taste—no tasting fees required</h2>
	            	<Grid desktop="50">
	            	
	            	<p>We have as well. That is why at Beyond Napa Valley created the Wine Explorer Membership. It’s the best way to explore the wine country! The wine explorer™ membership allows you to walk in with a guest, taste wine, buy wine and sign up for wine clubs, all with discounts.</p>
	            	</Grid>
	            	<Grid desktop="50">
	            		(Picture of tasting room)
	            	</Grid>
	    </GridContainer>
	    
	    <div className="bigImageHeader">
		  
	  		<div className="whiteBox">
	  			<h2>Walk-in with a guest and taste complimentary</h2>
	  			<p>Focus on the wine, not the tasting fee</p>
	  			<p><a href="#hi" className="button fullWidth">LEARN MORE</a></p>
	  		</div>
          	
          	<div className="hero-overlay-nobg"></div>
          	<img src={ tastingRoom } alt="Tasting Room" className="wineryImage" />
		  	</div>
		  	
		  	<GridContainer>
		  			<h2 className="center">The Benefits of being a Wine Explorer Member</h2>
	            	<Grid desktop="50">
	            	
	            	
	            	</Grid>
	            	<Grid desktop="50">
	            		(Picture of tasting room)
	            	</Grid>
	    </GridContainer>

      </div>
    );
  }
}
 
export default Home;
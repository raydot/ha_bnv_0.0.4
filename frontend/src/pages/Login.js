import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"
import { NavLink } from 'react-router-dom'

import MustardVines from "../img/mustard-vines.jpg"
// import MercurySquare from "../img/mercury-square.jpg"
// import jRickards from "../img/jrickards.jpg"
// import ramazzotti from "../img/ramazzotti-wine.jpg"
// import nallewinery from "../img/nalle-winery.jpg"
// import taltywine from "../img/talty-wine.jpg"
// import alquimista from "../img/alquimista-cellars.jpg"
// import hambycellars from "../img/hamby-cellars.jpg"
// import camapanaranch from "../img/campana-ranch.jpg"
// import brooksnote from "../img/brooks-note-winery.jpg"

 
class Regions extends Component {
  render() {
    return (
      <div>
		  <div className="smallHeader">
		  	<div className="titleInfo">
		  		<h1 className="pageTitle">LOGIN</h1>
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
	          
	          
	       
	       
	       
          
          
	      
	     
          
          
	       
	       </div>
       </div> // Close mainContent
    );
  }
}
 
export default Regions
import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"

import MustardVines from "../img/mustard-vines.jpg"
 
class Regions extends Component {
  render() {
    return (
      <div>
		  <div className="smallHeader">
		  	<div className="titleInfo">
		  		<h1 className="pageTitle">Wine Regions</h1>
          	</div>
          	<div className="hero-overlay"></div>
          	<img src={ MustardVines } alt="Mustard Vines" className="wineryImage" />
          </div>
          
          <div className="mainContent">
          
	          <div className="content">
	            <GridContainer>
	            	<Grid desktop="100">
	            		<p><strong>Lorem ipsizzle dolizzle sit amizzle</strong>, consectetuer adipiscing funky fresh. Nullizzle sapien velit, away volutpizzle, suscipit boom shackalack, fo shizzle vizzle, shiz. Pellentesque eget tortor. Fizzle erizzle. <em>Yo izzle sizzle dapibus turpis tempizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle. Stuff pellentesque nibh et turpizzle. Ass izzle tortizzle. Pellentesque fo shizzle mah nizzle fo rizzle,</em> mah home g-dizzle rhoncizzle nisi. In hac sizzle fo shizzle dictumst. Stuff dapibus. Curabitizzle tellizzle da bomb, pretizzle sheezy, mattizzle own yo, eleifend vitae, nunc. Bow wow wow suscipizzle. Integer semper velit sizzle ghetto.</p>
	            	</Grid>
	            </GridContainer>
	          </div>
	          
	          <div className="content">
	            <GridContainer>
				  <Grid desktop="33" tablet="33" mobile="100">
				    <h2><a href="/#">Regional View</a></h2>
				    <p>Browse by wine region</p>
				    <a href="#hi" className="button">See Regions</a>
				  </Grid>
				  <Grid desktop="33" tablet="33" mobile="100">
				    <h2><a href="#">List View</a></h2>
				    <p>Browse by list. Easy to print out and go wine tasting.</p>
				    <a href="#" className="button">See the list</a>
				  </Grid>
				  <Grid desktop="33" tablet="33" mobile="100">
				    <h2><a href="#">Wine Regions near me</a></h2>
				    <p>Find the closet wine region near where I am</p>
				    <p><a href="#" className="button">Find wine regions near me</a></p>
				  </Grid>
				</GridContainer>
	          </div>
	       
	       
		       <div className="content">
		            <GridContainer>
		            	<Grid desktop="100">
		            		<h2 className="center">Wine Regions</h2>
		            	</Grid>
		            </GridContainer>
		       </div>
		       
		       <div className="content">
		            <GridContainer>
		            	<ul className="grid-100 grid-parent">
		            	<li className="grid-25"><a href="">Mendocino County</a></li>
		            	<li className="grid-25"><a href="">San Francisco Bay Area</a></li>
		            	<li desktop="33" tablet="33" mobile="100"><a href="">Sonoma County</a></li>
		            </ul>
		            </GridContainer>
		       </div>
		       
		       
		       <div className="content">
		            <ul className="gridThumbnail">
		            	<li><a href="">Mendocino County</a></li>
		            	<li><a href="">San Francisco Bay Area</a></li>
		            	<li><a href="">Sonoma County</a></li>
		            </ul>
	          </div>
	       </div>
       </div> // Close mainContent
    );
  }
}
 
export default Regions
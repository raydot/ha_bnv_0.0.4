import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"
 
class Visits extends Component {
  render() {
    return (
      <div>
		  <div className="bgImageHeader">
		  	<div className="titleInfo">
		  		<div className="ava">
		  			Sierra Foothills
		  		</div>
		  		<h1 className="wineryTitle">Visits</h1>
		  		<div className="wineryLocation">Murphys, California</div>
          	</div>
          	<div className="hero-overlay"></div>
          	<img src="http://nautilusdesigns.com//websites/bnv-test/mustard-vines.jpg" alt="Mustard Vines" className="wineryImage" />
          </div>
          
          <div className="content">
            <GridContainer>
			  <Grid desktop="33" tablet="33">
			    I am 33% wide.
			  </Grid>
			  <Grid desktop="33" tablet="33">
			    I am 33% wide.
			  </Grid>
			  <Grid desktop="33" tablet="33">
			    I am 33% wide.
			  </Grid>
			</GridContainer>
          </div>
       </div>
    );
  }
}
 
export default Visits
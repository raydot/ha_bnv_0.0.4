import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"

import MustardVines from "../img/mustard-vines.jpg"

const var1 = process.env.REACT_APP_ENVVAR
const var2 = process.env.REACT_APP_DB_HOST

//alert('var1:', process.env.REACT_APP_ENVVAR, 'var2:', var2)
 
class Tester extends Component {
  render() {
    return (
      <div>
		  <div className="bigImageHeader">
		  	<div className="titleInfo">
		  		<div className="ava">
		  			Sierra Foothills
		  		</div>
		  		<h1 className="wineryTitle">Visits</h1>
		  		<div className="wineryLocation">Murphys, California
		  		</div>
          	</div>
          	<div className="hero-overlay"></div>
          	<img src={ MustardVines } alt="Mustard Vines" className="wineryImage" />
          </div>

          <div>
          <span>1: { var1 } 2:{ var2 }</span>
          	testing 1-2-3
          </div>
          
          <div className="content">
            <GridContainer>
			  <Grid desktop="33" tablet="33" mobile="100">
			    Column 1.  I am 33% wide.
			  </Grid>
			  <Grid desktop="33" tablet="33" mobile="100">
			    Column 2.  I am 33% wide.
			  </Grid>
			  <Grid desktop="33" tablet="33" mobile="100">
			    Column 3.  I am 33% wide.
			  </Grid>
			</GridContainer>
          </div>
       </div>
    );
  }
}
 
export default Tester
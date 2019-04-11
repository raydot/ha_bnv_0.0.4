import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"
 
class Visits extends Component {
  render() {
    return (
      <div>
          <h1>Visits</h1>
          
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
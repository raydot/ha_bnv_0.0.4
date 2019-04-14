import React, { Component } from "react"

import { Grid, GridContainer} from "unsemantic"

class Footer extends Component {
  render() {
    return (
      <div>
		<h1>Welcome!</h1>
		<footer className="site-footer">
			<div className="site-footer--container">
        		<p>Footer &copy;{(new Date().getFullYear())} Beyond Napa Valley Etc, logo, nice things...</p>
			<GridContainer>
			  <Grid desktop="33" tablet="33" mobile="100">
			    <p>Investors</p>
			    <p>Wineries</p>
			    <p>Join Us</p>
			  </Grid>
			  <Grid desktop="33" tablet="33" mobile="100">
			    Column 2.  I am 33% wide.
			  </Grid>
			  <Grid desktop="33" tablet="33" mobile="100">
			    Column 3.  I am 33% wide.
			  </Grid>
			</GridContainer>
			</div>
		</footer>
      </div>
    );
  }
}
 
export default Footer;
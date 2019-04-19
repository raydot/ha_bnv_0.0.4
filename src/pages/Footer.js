import React, { Component } from "react"

import { Grid, GridContainer} from "unsemantic"

class Footer extends Component {
  render() {
    return (
      <div>
		<footer className="site-footer">
			<div className="site-footer--container">
			
			<GridContainer>
				<Grid desktop="100">
				<h2 className="center">HAYDN WINS THE INTERNET<br/>SUBSCRIBE TO OUR NEWSLETTER</h2>
				<div id="mc_embed_signup">
<form action="https://beyondnapavalley.us4.list-manage.com/subscribe/post?u=053255dce6db9ca87405140ec&amp;id=451d1e4190" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
		<h2>Subscribe</h2>
			<div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
				<div className="mc-field-group">
					<label for="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
	<input type="email" value="" name="EMAIL" classNameName="required email" id="mce-EMAIL" />
				</div>
	<div id="mce-responses" className="clear">
		<div className="response" id="mce-error-response" style="display:none"></div>
			<div className="response" id="mce-success-response" style="display:none"></div>
			</div> 
				<div style="position: absolute; left: -5000px;" aria-hidden="true">
					<input type="text" name="b_053255dce6db9ca87405140ec_451d1e4190" tabindex="-1" value="" />
				</div>
				
    </div>
</form>
</div>
				</Grid>
			</GridContainer>
			
			
        		<p>Footer &copy;{(new Date().getFullYear())} Beyond Napa Valley Etc, logo, nice things...</p>
			<GridContainer>
			  <Grid desktop="33" tablet="33" mobile="100">
			    <p>Investors</p>
			    <p>Wineries</p>
			    <p>Join Us</p>
			  </Grid>
			  <Grid desktop="33" tablet="33" mobile="100">
			    <p>Column 2.  I am 33% wide.</p>
			    <p>My content wraps responsively!</p>
			  </Grid>
			  <Grid desktop="33" tablet="33" mobile="100">
			    <p>Column 3.  I am also 33% wide.</p>
			    <p>And my content also wraps responsively!</p>
			  </Grid>
			</GridContainer>
			</div>
		</footer>
      </div>
    );
  }
}
 
export default Footer;
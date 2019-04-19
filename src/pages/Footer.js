import React, { Component } from "react"

import { Grid, GridContainer} from "unsemantic"

import bnvLogo from "../img/beyond-napa-logo-2x.png"


class Footer extends Component {
  render() {
    return (
      <div>
		<footer className="site-footer">
			<div className="site-footer--container">
			
			<GridContainer>
				<Grid desktop="50" tablet="50" mobile="100">
				
				<h2>Go out and explore the wine country. Discover new wines and wineries. </h2>
				</Grid>
				<Grid desktop="25" tablet="50" mobile="100">
				<h3>Connect on Social Media</h3>
					<ul>
						<li><a href="https://www.facebook.com/beyondnapavalley/"><span>Facebook</span></a></li>
						<li><a href="https://www.facebook.com/beyondnapavalley/"><span>Instagram</span></a></li>
						<li><a href="https://www.facebook.com/beyondnapavalley/"><span>Twitter</span></a></li>
					</ul>
				
				</Grid>
				<Grid desktop="25" tablet="50" mobile="100">
					<h3>Other Resources</h3>
					<ul>
						<li><a href="">Support</a></li>
						<li><a href="https://www.facebook.com/beyondnapavalley/"><span>Privacy Policy</span></a></li>
						<li><a href="https://www.facebook.com/beyondnapavalley/"><span>Subscribe to our Newsletter</span></a></li>
					</ul>
					<h3>Copyright &copy;{(new Date().getFullYear())} Beyond Napa Valley</h3>
				</Grid>
			</GridContainer>
			
			</div>
		</footer>
      </div>
    );
  }
}
 
export default Footer;
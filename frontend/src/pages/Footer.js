import React, { Component } from "react"

import { Grid, GridContainer} from "unsemantic"

import { NavLink } from 'react-router-dom'

// import bnvLogo from "../img/beyond-napa-logo-2x.png"


class Footer extends Component {
  render() {
    return (
      <div>

		<footer className="site-footer">
			<div className="site-footer--container">
			
			<GridContainer>
				<Grid desktop="33">
				<h3>Our Mission</h3>
				<p>To empower wine explorers to go out and seek out that next bottle of amazing wine.</p>
				
				</Grid>
				<Grid desktop="33">
				<h3>Connect on Social Media</h3>
					<ul>
						<li><NavLink to="https://www.facebook.com/beyondnapavalley/"><span>Facebook</span></NavLink></li>
						<li><NavLink to="https://www.instagram.com/beyondnapavalley/"><span>Instagram</span></NavLink></li>
						<li><NavLink to="https://twitter.com/beyond_napa"><span>Twitter</span></NavLink></li>
					</ul>
				
				</Grid>
				<Grid desktop="33">
					<h3>Other Resources</h3>
					<ul>
						<li><NavLink to="/">Support</NavLink></li>
						<li><NavLink to="https://www.facebook.com/beyondnapavalley/"><span>Privacy Policy</span></NavLink></li>
						<li><NavLink to="https://www.facebook.com/beyondnapavalley/"><span>Subscribe to our Newsletter</span></NavLink></li>
					</ul>
					
				</Grid>
			</GridContainer>
				<p className="center">Copyright &copy;{(new Date().getFullYear())} Beyond Napa Valley | Please drink responsibly</p>
			</div>
		</footer>
      </div>
    );
  }
}
 
export default Footer;
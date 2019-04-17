import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"

import MustardVines from "../img/mustard-vines.jpg"
 
class MercuryWinery extends Component {
  render() {
    return (
      <div>
		  <div className="smallHeader">
		  	<div className="titleInfo">
		  		<h1 className="pageTitle">Become a Wine Explorer<span className="smallerType">&trade;</span> Member</h1>
          	</div>
          	<div className="hero-overlay"></div>
          	<img src={ MustardVines } alt="Mustard Vines" className="wineryImage" />
          </div>
          
          
          
	          <div className="content">
	            <GridContainer>
	            	<Grid desktop="100">
	            		<p><strong>Lorem ipsizzle dolizzle sit amizzle</strong>, consectetuer adipiscing funky fresh. Nullizzle sapien velit, away volutpizzle, suscipit boom shackalack, fo shizzle vizzle, shiz. Pellentesque eget tortor. Fizzle erizzle. <em>Yo izzle sizzle dapibus turpis tempizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle. Stuff pellentesque nibh et turpizzle. Ass izzle tortizzle. Pellentesque fo shizzle mah nizzle fo rizzle,</em> mah home g-dizzle rhoncizzle nisi. In hac sizzle fo shizzle dictumst. Stuff dapibus. Curabitizzle tellizzle da bomb, pretizzle sheezy, mattizzle own yo, eleifend vitae, nunc. Bow wow wow suscipizzle. Integer semper velit sizzle ghetto.</p>
	            	</Grid>
	            </GridContainer>
	          </div>
	          <div className="mainContent">
	          <div className="content">
	            <GridContainer>
				  <Grid desktop="33" tablet="33" mobile="100">
				  	<div className="buyBox">
					    <h2>For a Day</h2>
					    <p className="moneyValue"><span className="dollar">$</span>80</p>
					    <ul>
					    	<li><strong>Complimentary</strong> Tasting for you and guest</li>
					    	<li><strong>25%</strong> off any enhanced reserved</li> 
					    	<li><strong>10%</strong> off all wine</li>
					    	<li>Additional <strong>5%</strong> on your wine purchase the day you join the wine club</li>
					    </ul>
					    <p><strong><a href="#hi" className="button fullWidth">Buy Now</a></strong></p>
				    </div>
				  </Grid>
				  <Grid desktop="33" tablet="33" mobile="100">
				    <div className="buyBox">
					    <h2>For 3 Days</h2>
					    <p className="moneyValue"><span className="dollar">$</span>180</p>
					    <ul>
					    	<li><strong>Complimentary</strong> Tasting for you and guest</li>
					    	<li><strong>25%</strong> off any enhanced reserved</li> 
					    	<li><strong>10%</strong> off all wine</li>
					    	<li>Additional <strong>5%</strong> on your wine purchase the day you join the wine club</li>
					    </ul>
					    <p><strong><a href="#hi" className="button fullWidth">Buy Now</a></strong></p>
				    </div>
				  </Grid>
				  <Grid desktop="33" tablet="33" mobile="100">
				    <div className="buyBox">
					    <h2>For an Entire Year</h2>
					    <p className="moneyValue"><span className="dollar">$</span>250</p>
					    <ul>
					    	<li><strong>Complimentary</strong> Tasting for you + guest for a year</li>
					    	<li><strong>25%</strong> off any enhanced reserved</li> 
					    	<li><strong>10%</strong> off all wine</li>
					    	<li>Additional <strong>5%</strong> on your wine purchase the day you join the wine club *</li>
					    	<li><strong>+</strong> Check-in ability using our own app</li>
					    	<li><strong>+</strong> Record notes on your visits</li>
					    	<li><strong>+</strong> Discounts on dining **</li>
					    	<li><strong>+</strong> Discounts on chauffeured transportation **</li>
					    	<li><strong>+</strong> Discounts on lodging **</li>
					    	<li><strong>+</strong> In-app digital membership card</li>
					    </ul>
					    <p><strong><a href="#hi" className="button fullWidth">Buy Now</a></strong></p>
					    <p className="smallerType"><em>Membership automatically renews after 1 year</em></p>
				    </div>
				  </Grid>
				  
				</GridContainer>
				
	          </div>
			  <Grid>
			  	<GridContainer>
	       <p className="smallerType center">* Limited to a case at select wineries | ** Coming 2019 / 2020 | All purchases are non-refundable | Please drink responsibly</p>
	       		</GridContainer>
		      </Grid>
	       </div>
       </div> 
    );
  }
}
 
export default MercuryWinery
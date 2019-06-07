import React, { Component } from 'react'
import { Grid, GridContainer} from 'unsemantic'
//import { Route, NavLink } from "react-router-dom"
import { Link, NavLink } from 'react-router-dom'

import MustardVines from '../img/mustard-vines.jpg'
import foleyWinery from '../img/foley-winery.jpg'
 
class Join extends Component {
	// handleSubmit(event) {
	// 	event.preventDefault()
	// 	const data = new FormData(event.target)
	
	// 	console.log(data)

	// 	// fetch('/register', {
	// 	// 	method: 'GET',
	// 	// 	body: data
	// 	// })
	// }

	constructor(props) {
			super(props)
			//console.log('v?', this.props.location.state.viz)
		}

  render() {
    return (
      <div>
		  <div className="smallHeader">
		  	<div className="titleInfo">
		  		<h1 className="pageTitle">Become a Wine Explorer<span className="smallerType">&trade;</span> Member</h1>
          	</div>
          	<div className="hero-overlay"></div>
          	<img src={ foleyWinery } alt="Foley Winery" className="wineryImage" />
          	
          </div>
          
          
          
	          <div className="content">
	          	
	            <GridContainer>
	            	<Grid desktop="100">
	            		<h3>Join Beyond Napa Valley for Free! [link]</h3>
	            	</Grid>
	            </GridContainer>
	          </div>
	          <div className="content">
	            <GridContainer>
	            	<Grid desktop="100">
	            		<h3>Become a Wine Explorer™</h3>
	            	</Grid>
	            </GridContainer>
	          </div>
	          <div className="mainContent">
	          <div className="content">
	            <GridContainer>
	            <form onSubmit={this.handleSubmit}>
	              <Grid desktop="25" tablet="25" mobile="100">
	              	<div className="buyBox">
	            	    <h2>Become a Wine Explorer</h2>
	            	    <p>Free!™</p>
	            	    <ul>
	            	    	<li><strong>Complimentary</strong> Tasting for you and guest</li>
	            	    	<li><strong>25%</strong> off any enhanced reserved</li> 
	            	    	<li><strong>10%</strong> off all wine</li>
	            	    	<li>Additional <strong>5%</strong> on your wine purchase the day you join the wine club</li>
	            	    	<li><strong>+</strong> Check-in ability using our own app</li>
	            	    	<li><strong>+</strong> Record notes on your visits</li>

	            	    </ul>
	            	    <p><strong><button to="/Register" className="button fullWidth">Join Now</button></strong></p>
	                </div>
	              </Grid>
				  <Grid desktop="25" tablet="25" mobile="100">
				  	<div className="buyBox">
					    <h2>For a Day</h2>
					    <p className="moneyValue"><span className="dollar">$</span>80</p>
					    <ul>
					    	<li><strong>Complimentary</strong> Tasting for you and guest</li>
					    	<li><strong>25%</strong> off any enhanced reserved</li> 
					    	<li><strong>10%</strong> off all wine</li>
					    	<li>Additional <strong>5%</strong> on your wine purchase the day you join the wine club</li>
					    	<li><strong>+</strong> Check-in ability using our own app</li>
					    	<li><strong>+</strong> Record notes on your visits</li>

					    </ul>
					    <p><strong><button to="/Register" className="button fullWidth" name="1">Buy One-Day Pass Now</button></strong></p>
				    </div>
				  </Grid>
				  <Grid desktop="25" tablet="25" mobile="100">
				    <div className="buyBox">
					    <h2>For 3 Days</h2>
					    <p className="moneyValue"><span className="dollar">$</span>180</p>
					    <ul>
					    	<li><strong>Complimentary</strong> Tasting for you and guest</li>
					    	<li><strong>25%</strong> off any enhanced reserved</li> 
					    	<li><strong>10%</strong> off all wine</li>
					    	<li>Additional <strong>5%</strong> on your wine purchase the day you join the wine club</li>					    	
					    	<li><strong>+</strong> Check-in ability using our own app</li>
					    	<li><strong>+</strong> Record notes on your visits</li>

					    </ul>
					    <p><strong><button to="/Register" className="button fullWidth" name="3">Buy Three-Day Pass Now</button></strong></p>
				    </div>
				  </Grid>
				  <Grid desktop="25" tablet="25" mobile="100">
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
					    <p><strong><Link className="button fullWidth" to={{ pathname:'/Register', state:{ 'viz':5 } }}>Buy One-Year Pass Now</Link></strong></p>
					    <p className="smallerType"><em>Membership automatically renews after 1 year</em></p>
					    
				    </div>
				  </Grid>
				  </form>
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
 
export default Join
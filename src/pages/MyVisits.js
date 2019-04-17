import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"

import MustardVines from "../img/mustard-vines.jpg"
 
class Dashboard extends Component {
  render() {
    return (
      <div>
		<div className="noheroImageHeader">
			<div className="content">
		            <GridContainer>
		            	<Grid desktop="100">
							<h1>Wineries I Have Visited</h1>
			  			</Grid>
			  		</GridContainer>
			  		
			  			<ul className="subNav">
			  				<li><a href="#">MY MEMBERSHIP</a></li>
			  				<li><a href="#">MY VISITS</a></li>
			  				<li><a href="#">MY DETAILS</a></li>
			  			</ul>
			  			<div className="clear"></div>
			</div>
				  	
		</div>
          
          <div className="mainContent">
          
	          <div className="content">
	            <GridContainer>
	            	<Grid desktop="100">
	            		<p>Thank you John Spartan for becoming a Wine Explorer on this date.</p>
	            	</Grid>
	            </GridContainer>
	          </div>
	          
	          <div className="content">
	            <table>
	            	<thead>
	            		<tr>
	            			<th className="visitDate">Visit Date</th>
	            			<th className="winery">Winery</th>
	            			<th>Favorite Wine</th>
	            			<th>Other Details</th>
	            		</tr>
	            	</thead>
					<tbody>
						<tr>
							<td className="date">
								<div className="dateMonth">JAN</div>
								<div className="dateDay">09</div>
								<div className="dateYear">2019</div>
							</td>
							<td className="winery">
								<div>Ramazzotti Wine</div>
							</td>
							<td className="favWine">
								Port
							</td>
							<td className="wineryDetails">
								Shiznit ipsizzle dolizzle sit break it down, shit adipiscing elit. Sheezy sapien velizzle, mofo volutpizzle, suscipit quizzle, gravida vizzle, i'm in the shizzle. Pellentesque bling bling shiznit. Sed eros.
							</td>
						</tr>
					</tbody>
	            </table>
	          </div>
	       
	       </div>
       </div> // Close mainContent
    );
  }
}
 
export default Dashboard
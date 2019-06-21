import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"

//import { NavLink } from "react-router-dom"
 
class checkIn extends Component {
  render() {
    return (
      <div>
          
          <div className="content">
          
            
            
            <div className="content">
            <GridContainer>
			  <Grid desktop="100">
			  <h1 className="pageTitleBlack">Check-In</h1>
			  (If they have a membership)
			    <form>
				<ul className="form-style-1">
				   
				    
				    <li>
				        <label>Winery</label>
				        <select name="Wineries" className="field-select">
				        <option value="Alquimista Cellars">Alquimista Cellars</option>
				        <option value="Brooks Note Winery">Brooks Note Winery</option>
				        <option value="Hamby Cellars">Hamby Cellars</option>
				        <option value="J. Rickards Winery">J. Rickards Winery</option>
				        <option value="Mercury Winery">Mercury Winery</option>
				        <option value="Nalle Winery">Nalle Winery</option>
				        <option value="Ramazzotti Wines">Ramazzotti Wines</option>
				        <option value="Talty Vineyards and Winery">Talty Vineyards and Winery</option>
				        <option value="Super Sonoman Winery">Super Sonoman Winery</option>
				        </select>
				    </li>
				    
				    <li>
						<label>Favorite Wine</label>
						<input type="text" name="favoriteWine" className="field-long" />
					</li>
					
					<li>
						<label>What did you like about the winery?</label>
						<input type="text" name="wineryDetails" className="field-long" />
					</li>
				    
				    <li>
				        <input type="submit" value="Submit" />
				    </li>
				</ul>
				</form>
				
				(If they dont have a membersip)
			<p>Sorry, but check-ins are only available to members. 1-day, 3-day and yearly memberships are available for purchase.</p>
			  </Grid>
			</GridContainer>
			
			
          </div>
            
            
	     

          </div>
       </div>
    );
  }
}
 
export default checkIn
import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"

import MustardVines from "../img/mustard-vines.jpg"

//// LETS TEST THAT MYSQL CONNECTION ////
/*var mysql = require('mysql')
var connection = mysql.createConnection({
	host		: process.env.REACT_APP_DB_HOST,
	user		: process.env.REACT_APP_DB_USER,
	password	: process.env.REACT_APP_DB_PW,
	port		: process.env.REACT_APP_DB_PORT
});

connection.connect(function(err) {
	if (err) {
		console.error('Your stuff is broke!', err.stack)
		return
	}

	console.log('Hey hey I got in!')
})

connection.end();
*/

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
          <span>This is a test span.</span>
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
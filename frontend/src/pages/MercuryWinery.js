import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"

import MustardVines from "../img/mustard-vines.jpg"
 
class Visits extends Component {
  render() {
    return (
      <div>
		  <div className="bigImageHeader">
		  	<div className="titleInfo">
		  		<div className="ava">
		  			Alexander Valley AVA
		  		</div>
		  		<h1 className="wineryTitle">Mercury Wine</h1>
		  		<div className="wineryLocation">Murphys, California
		  		</div>
          	</div>
          	<div className="hero-overlay"></div>
          	<img src={ MustardVines } alt="Mustard Vines" className="wineryImage" />
          </div>
          
          <div className="content">
            <GridContainer>
			  <Grid desktop="33">
			  	
			  		<ul>
			  			<li><strong>Hours:</strong> 10:30-4:30 (S-TH) and 10:30-5 (F-Sa)</li>
			  			<li><strong>Phone:</strong> (707) 257-5771</li>
			  			<li><strong>Website:</strong> <a href="http://www.mercurywine.com">www.mercurywine.com</a></li>
			  		</ul>
			  		<p>Map goes here!</p>
			  	</Grid>
			  	<Grid desktop="66">
			  	<div className="synopsis">
			  	
			  	<p>At first glance you might mistake Mercury Winery for a traditional winery. There’s a collection of bottles behind the counter along with a spit bucket and crackers lining the wooden tasting room countertop. Yet about 30 seconds after seeing the usual, you begin to experience the unusual and uncommon. And that’s Mercury Winery.</p>
			  	</div>
			  	<p>The winery has it’s roots in the same sort of uncommonality. Brad Beard grew up in a state you don’t normally associate with wine—Arizona. As the old saying goes, “Go West, young man.” And so Brad did, as far west of Arizona as you can go in the continental United States—to California, with his brother, Grady in tow.</p>
			  	<p>

What’s not uncommon to see is either or both brothers working the winery. As this is Sonoma County, where dogs are as synonymous as Cabernet Sauvignon is in these parts, Mercury winery has an adorable black lab, Freddie Mercury. You’ll often see Freddie munching on corks or lounging in his bed in the corner of the room. It’s his domain and he is completely comfortable in the tasting room.</p>
				<p>

You might see the Freddie cuvee (depending on the time of year) along with artwork drawn of the lab. On the internet, Freddie often appears in many of the photos on Mercury’s instagram feed.
</p>
			  </Grid>
			  
			</GridContainer>
          </div>
       </div>
    );
  }
}
 
export default Visits
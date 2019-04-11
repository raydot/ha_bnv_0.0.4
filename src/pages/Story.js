import React, { Component } from "react"

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"
 
class Regions extends Component {
  render() {
    return (
      <div>
          <h1>The Story of Beyond Napa Valley</h1>
          
          <div className="content">
            <p>Winemakers refer to screw caps as Stelvin enclosures, because it sounds better than "lid." Sauvignon blanc is light, grassy, and herbaceous. Younger grapes can instill herbaceous notes on the nose. The classic profile of Cabernet Sauvignon tends to be full-bodied with high tannins and noticeable acidity that contributes to the wine's aging potential. The world's oldest bottle of wine is over 1600 years old and can be found at a museum in Germany. </p>

            <p><NavLink to="./visits">Link to another page</NavLink></p>

          </div>
       </div>
    );
  }
}
 
export default Regions;
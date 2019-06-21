import React, { Component } from "react"
import { Grid, GridContainer} from "unsemantic"
import { NavLink } from "react-router-dom"
//import MustardVines from "../img/mustard-vines.jpg"
import LoginMainImage from "../img/login-main-image.jpg"
 
class MercuryWinery extends Component {
  render() {
    return (
      <div>
      <div className="smallHeader">
        <div className="titleInfo">
          <h1 className="pageTitle">Holy Petite Sirah Batman!</h1>
            </div>
            <div className="hero-overlay"></div>
            <img src={ LoginMainImage } alt="Mustard Vines" className="wineryImage" />
          </div>
          
          
          
            <div className="content">
              <GridContainer>
                <Grid desktop="100">
                  <h1>404</h1>
                  <h2>You are trying to access a page that does not exist!</h2>
                  <h3><NavLink to='/'>Get me out of here!</NavLink></h3>

                </Grid>
              </GridContainer>
            </div>


       
         </div>
    );
  }
}
 
export default MercuryWinery
import React, { Component } from "react"

import CakePops from "../img/cake-pops.jpg"
 
class Contact extends Component {
  render() {
    return (
      <div>
          <h1>Membership</h1>
          
          <div className="content">
             <p>Why Joinq?</p>
             <img src={CakePops} alt={'Time for cake pops!'} className='foo' />
          </div>
       </div>
    );
  }
}
 
export default Contact
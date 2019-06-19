// src/Callback/Callback.js


import React, { Component } from 'react'
import loading from '../img/cake-pops.jpg'

class Callback extends Component {
  render() {
    const style = {display: inherit;} //...

    return (
      <div style={style}>
        <img src={loading} alt="loading"/>
        This is just a test
      </div>
    );
  }
}

export default Callback;
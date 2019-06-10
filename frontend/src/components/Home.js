// SETTING AND GETTING AUTH COOKIES

// INSPIRED BY:
// https://medium.com/@rossbulat/using-cookies-in-react-redux-and-react-router-4-f5f6079905dc

import React, { Component } from 'react'

class Home extends React.Component {
  // not sure what this is!
}

const mapStateToProps = (state, ownProps) => {
  return ({
    state: state, 
    cookies: ownProps.cookies
  })
}

export const HomeContainer = connect (
  mapStateToProps,
  null
)(Home)

export default HomeContainer
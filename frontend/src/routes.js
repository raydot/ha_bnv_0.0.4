import React from 'react';
import { Route, Router } from 'react-router-dom';
//import App from './App';
import Main from './pages/Main'
//import Authhome from './pages/Authhome';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

// REDUX
import reducers from './redux/reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import loggedInUser from './redux/actions'

const store=createStore(reducers)

require('dotenv').config()
console.log('routes .env:', process.env)

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

// REDUX might be overkill here, but good to have for the future...maybe?

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={Main}>
      <div>
        <Route path="/" render={(props) => <Provider store={ store }> <AppConnection auth={auth} {...props} /> </Provider>} />
        
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} /> 
        }}/>
      </div>
    </Router>
  );
}


// REDUX HELPER FUNCTIONS:
// THIS DEF BELONGS IN ITS OWN FILE.
/*
    Maps Redux dispatch function into function passed to React component.  
    Pass the loggedInUser action with the value parameter into dispatch
    and then that gets passed on as a prop.
*/

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (value) => {
      dispatch(loggedInUser(value))
    }
  }
}


/*
    This takes the output of the reducers and puts it into the props of the app.
    State is either an empty object or user email.  For now.
*/

const mapStateToProps = (state) => {
  return {
    uEml: state
  }
}

// connect these mapping functions to main
const AppConnection = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

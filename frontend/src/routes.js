import React from 'react';
import { Route, Router } from 'react-router-dom';
//import App from './App';
import Main from './pages/Main'
import Authhome from './pages/Authhome';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

require('dotenv').config()
console.log('routes .env:', process.env)

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={Authhome}>
      <div>
        <Route path="/" render={(props) => <Main auth={auth} {...props} />} />
        <Route path="/authhome" render={(props) => <Authhome auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} /> 
        }}/>
      </div>
    </Router>
  );
}
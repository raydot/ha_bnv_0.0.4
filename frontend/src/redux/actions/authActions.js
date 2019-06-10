import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
import jwt_decode from 'jwt_decode'

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from './types'

// Register User (already handled)

// Login - get user token (already handled)

// SAVE TOKEN TO LOCAL STORAGE!
// We don't want to do this.  Put the token in a cookie instead!

// Set logged in user
export const setCurrent user = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  }
}

// Log user out
export const logoutUser = () => dispatch => {
  // delete cookie

  // Remove auth header for future requests
  setAuthToken(false)

  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch (setCurrentUser({}))
}


import { createStore } from 'redux'
import reducer from './reducers'

const initialState = {user: 'test'}

/*  Create the store with the reducer and the initial state of the store.
    This gets passed into the <Provider> component.
*/

export default createStore(
  reducer, 
  initialState
)
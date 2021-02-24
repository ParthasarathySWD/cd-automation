import loggedInReducer from './Authentication.js';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    IsAuthenticated: loggedInReducer
})

export default allReducers;
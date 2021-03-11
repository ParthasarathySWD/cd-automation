import loggedInReducer from './Authentication.js';
import ProfileReducer from './Profile.js';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    IsAuthenticated: loggedInReducer,
    Profile: ProfileReducer
})

export default allReducers;
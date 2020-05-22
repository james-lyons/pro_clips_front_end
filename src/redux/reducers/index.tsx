import { combineReducers } from 'redux';
import authReducer from './authReducer/authReducer';
import userReducer from './userReducer/userReducer';
import followerReducer from './followReducer/followReducer';

export default combineReducers({
    authReducer,
    userReducer,
    followerReducer
});

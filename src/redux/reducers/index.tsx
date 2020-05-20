import { combineReducers } from 'redux';
import authReducer from './authReducer/authReducer';
import userReducer from './userReducer/userReducer';

export default combineReducers({
    authReducer,
    userReducer
});

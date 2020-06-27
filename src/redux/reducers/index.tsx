import { combineReducers } from 'redux';
import authReducer from './authReducer/authReducer';
import accountReducer from './accountReducer/accountReducer';
import userReducer from './userReducer/userReducer';
import followerReducer from './followReducer/followReducer';
import commentReducer from './commentReducer/commentReducer';
import replyReducer from './replyReducer/replyReducer';
import clipReducer from './clipReducer/clipReducer';

export default combineReducers({
    authReducer,
    userReducer,
    clipReducer,
    replyReducer,
    accountReducer,
    commentReducer,
    followerReducer
});

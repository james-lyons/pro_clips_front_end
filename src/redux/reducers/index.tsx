import { combineReducers } from 'redux';
import authReducer from './authReducer/authReducer';
import userReducer from './userReducer/userReducer';
import followerReducer from './followReducer/followReducer';
import commentReducer from './commentReducer/commentReducer';
import replyReducer from './replyReducer/replyReducer';
import clipReducer from './clipReducer/clipReducer';

export default combineReducers({
    authReducer,
    userReducer,
    followerReducer,
    commentReducer,
    replyReducer,
    clipReducer
});

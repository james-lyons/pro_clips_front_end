import { State, Action } from './config';

function followReducer (state: State = {
    followersList: null,
    followingList: null,
    followUserError: null,
    followUserMessage: null,
    unfollowUserError: null,
    unfollowUserMessage: null

}, action: Action) {
    
    switch (action.type) {
        case "FOLLOW_USER_FULFILLED":
            return { ...state };

        case "FOLLOW_USER_REJECTED":
            return { ...state, followUserError: action.payload.error, followUserMessage: action.payload.message };

        case "UNFOLLOW_USER_FULFILLED":
            return { ...state };
            
        case "UNFOLLOW_USER_REJECTED":
            return { ...state, unfollowUserError: action.payload.error, ufollowUserMessage: action.payload.message };

        case "FETCH_FOLLOWERS_FULFILLED":
            return { ...state, followersList: action.payload.data };
            
        case "FETCH_FOLLOWERS_REJECTED":
            return { ...state, unfollowUserError: action.payload.error, ufollowUserMessage: action.payload.message };

        case "FETCH_FOLLOWINGLIST_FULFILLED":
            return { ...state, followingList: action.payload.data };
            
        case "FETCH_FOLLOWINGLIST_REJECTED":
            return { ...state, unfollowUserError: action.payload.error, ufollowUserMessage: action.payload.message };

        default:
            return { ...state };
    };
};

export default followReducer;
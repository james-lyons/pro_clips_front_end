import { State, Action } from './config';

function followReducer (state: State = {
    followersList: null,
    followingList: null,
    followUserError: null,
    unfollowUserError: null,

}, action: Action) {
    
    switch (action.type) {
        case "FOLLOW_USER_FULFILLED":
            return { ...state };

        case "FOLLOW_USER_REJECTED":
            return { ...state, followUserError: action.payload.error };

        case "UNFOLLOW_USER_FULFILLED":
            return { ...state };
            
        case "UNFOLLOW_USER_REJECTED":
            return { ...state, unfollowUserError: action.payload.error };

        case "FETCH_FOLLOWERS_FULFILLED":
            return { ...state, followersList: action.payload.data };
            
        case "FETCH_FOLLOWERS_REJECTED":
            return { ...state, unfollowUserError: action.payload.error };

        case "FETCH_FOLLOWINGLIST_FULFILLED":
            return { ...state, followingList: action.payload.data };
            
        case "FETCH_FOLLOWINGLIST_REJECTED":
            return { ...state, unfollowUserError: action.payload.error };

        default:
            return { ...state };
    };
};

export default followReducer;
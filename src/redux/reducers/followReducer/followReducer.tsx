import { State, Action } from './config';

function followReducer (state: State = {
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

        default:
            return { ...state };
    };
};

export default followReducer;
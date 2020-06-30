import { State, Action } from './config';

function authReducer(state: State = {
    error: null,

}, action: Action) {

    switch(action.type) {
        case "USER_REGISTRATION_FULFILLED":
            return { ...state, errors: null };

        case "USER_REGISTRATION_REJECTED":
            return { ...state, errors: action.payload.error };

        case "USER_LOGIN_FULFILLED":
            return { ...state, errors: null };

        case "USER_LOGIN_REJECTED":
            return { ...state, error: action.payload.error };

        case "USER_LOGOUT_FULFILLED":
            return { ...state, errors: null };

        case "USER_LOGOUT_REJECTED":
            return { ...state, error: action.payload.error };

        default:
            return { ...state };
    };
};

export default authReducer;

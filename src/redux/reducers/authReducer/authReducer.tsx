import { State, Action } from './config';

function authReducer(state:State = {
    errors: null,
    message: null

}, action: Action) {

    switch(action.type) {
        case "USER_REGISTRATION_FULFILLED":
            return { ...state };

        case "USER_REGISTRATION_REJECTED":
            return { ...state, errors: action.payload.errors, message: action.payload.message };

        case "USER_LOGIN_FULFILLED":
            return { ...state, errors: null, message: null };

        case "USER_LOGIN_REJECTED":
            return { ...state, errors: action.payload.errors, message: action.payload.message };

        case "USER_LOGOUT_FULFILLED":
            return { ...state };

        case "USER_LOGOUT_REJECTED":
            return { ...state, errors: action.payload.errors, message: action.payload.message };

        default:
            return { ...state };
    };
};

export default authReducer;

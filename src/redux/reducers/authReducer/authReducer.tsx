import { State, Action } from './config';

function authReducer(state: State = {
    errors: null

}, action: Action) {

    switch(action.type) {
        case "USER_REGISTRATION_FULFILLED":
            return { ...state, errors: null };

        case "USER_REGISTRATION_REJECTED":
            return { ...state, errors: action.payload.errors };

        case "USER_LOGIN_FULFILLED":
            return { ...state, errors: null };

        case "USER_LOGIN_REJECTED":
            return { ...state, errors: action.payload.errors };

        case "USER_LOGOUT_FULFILLED":
            return { ...state, errors: null };

        case "USER_LOGOUT_REJECTED":
            return { ...state, errors: action.payload.errors };

        default:
            return { ...state };
    };
};

export default authReducer;

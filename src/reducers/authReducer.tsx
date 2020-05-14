import { User, State, Action } from './reducer.config';

function authReducer(state:State = {
    user: {
        userName: '',
        email: '',
        profile_image: ''
    },
    errors: null,
    message: null

}, action: Action) {

    switch(action.type) {
        case "USER_REGISTRATION_FULFILLED":
            return { ...state };

        case "USER_REGISTRATION_REJECTED":
            return { ...state, errors: action.payload.errors, message: action.payload.message };

        case "USER_LOGIN_FULFILLED":
            return { ...state };

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

export default authReducer
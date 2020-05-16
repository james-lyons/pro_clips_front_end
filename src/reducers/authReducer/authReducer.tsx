import { User, State, Action } from './reducer.config';

function authReducer(state:State = {
    user: {
        userName: '',
        email: '',
        profile_image: '',
        id: ''
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
            return {
                ...state,
                user: {
                    userName: action.payload.userName,
                    profile_image: action.payload.profile_image,
                    id: action.payload.id,
                },
                errors: null,
                message: null
            };

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

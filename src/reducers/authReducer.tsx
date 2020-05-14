interface User {
    userName: string,
    email: string,
    profile_image: string
};

interface State {
    user: User,
    errors: null | Array<string>,
    message: string
};

interface Action {
    type: string,
    payload: object
};

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
            return { ...state, errors: action.payload };

        case "USER_LOGOUT_FULFILLED":
            return { ...state };

        case "USER_LOGOUT_REJECTED":
            return { ...state, errors: action.payload };

        default:
            return { ...state };
    };
};

export default authReducer
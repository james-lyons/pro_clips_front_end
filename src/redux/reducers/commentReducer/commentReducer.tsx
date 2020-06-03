import { State, Action } from './config';

const commentReducer = (state: State ={
    comments: {
        poster: '',
        text: '',
        id: ''
    },
    comment: {
        poster: '',
        text: '',
        id: ''
    },
    responses: {
        poster: '',
        text: '',
        id: ''
    },
    response: {
        poster: '',
        text: '',
        id: ''
    },
    errors: null,
    message: null
}, action: Action) => {
    
    switch(action.type) {

        case "CREATE_COMMENT_FULFILLED":
            return { ...state };

        case "CREATE_COMMENT_REJECTED":
            return { ...state };

        case "EDIT_COMMENTS_FULFILLED":
            return { ...state };

        case "EDIT_COMMENTS_REJECTED":
            return { ...state };

        case "DELETE_COMMENTS_FULFILLED":
            return { ...state };

        case "DELETE_COMMENTS_REJECTED":
            return { ...state };

        case "FETCH_COMMENTS_FULFILLED":
            return { ...state };

        case "FETCH_COMMENTS_REJECTED":
            return { ...state };

        case "CREATE_RESPONSE_FULFILLED":
            return { ...state };

        case "CREATE_RESPONSE_REJECTED":
            return { ...state };

        case "EDIT_RESPONSES_FULFILLED":
            return { ...state };

        case "EDIT_RESPONSES_REJECTED":
            return { ...state };

        case "DELETE_RESPONSES_FULFILLED":
            return { ...state };

        case "DELETE_RESPONSES_REJECTED":
            return { ...state };

        case "FETCH_RESPONSES_FULFILLED":
            return { ...state };

        case "FETCH_RESPONSES_REJECTED":
            return { ...state };

        default:
            return { ...state };
    };
};

export default commentReducer;

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
    errors: null,
    message: null
    
}, action: Action) => {
    
    switch(action.type) {

        case "FETCH_COMMENTS_FULFILLED":
            return { ...state };

        case "FETCH_COMMENTS_REJECTED":
            return { ...state };

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

        default:
            return { ...state };
    };
};

export default commentReducer;

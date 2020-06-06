import { State, Action } from './config';

const commentReducer = (state: State ={
    comments: null,
    comment: {
        comment_text: null,
        _id: null,
        author_id: null,
        author_name: null,
        clip_id: null
    },
    errors: null,
    message: null
    
}, action: Action) => {
    
    switch(action.type) {

        case "FETCH_COMMENTS_FULFILLED":
            return { ...state, comments: action.payload };

        case "FETCH_COMMENTS_REJECTED":
            return { ...state, errors: action.payload.data.error, message: action.payload.data.message };

        case "CREATE_COMMENT_FULFILLED":
            return { ...state };

        case "CREATE_COMMENT_REJECTED":
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

import { State, Action } from './config';

const commentReducer = (state: State ={
    comments: null,
    comment: {
        _id: null,
        clip_id: null,
        author_id: null,
        author_name: null,
        author_profile_image: null,
        comment_text: null,
    },
    error: null
    
}, action: Action) => {
    
    switch(action.type) {

        case "RESET_COMMENTS": 
            return { ...state, comments: null }

        case "FETCH_COMMENTS_FULFILLED":
            return { ...state, comments: action.payload };

        case "FETCH_COMMENTS_REJECTED":
            return { ...state, error: action.payload.error };

        case "CREATE_COMMENT_FULFILLED":
            return { ...state };

        case "CREATE_COMMENT_REJECTED":
            return { ...state, error: action.payload.error };

        case "DELETE_COMMENTS_FULFILLED":
            return { ...state };

        case "DELETE_COMMENTS_REJECTED":
            return { ...state, error: action.payload.error };

        case "LIKE_COMMENT_FULFILLED": 
            return { ...state };
    
        case "UNLIKE_COMMENT_REJECTED": 
            return { ...state, error: action.payload.error };

        default:
            return { ...state };
    };
};

export default commentReducer;

import { State, Action } from './config';

const commentReducer = (state: State ={
    replies: {
        poster: '',
        text: '',
        id: ''
    },
    reply: {
        poster: '',
        text: '',
        id: ''
    },
    errors: null,
    message: null
    
}, action: Action) => {
    
    switch(action.type) {

        case "FETCH_REPLIES_FULFILLED":
            return { ...state };

        case "FETCH_REPLIES_REJECTED":
            return { ...state };

        case "CREATE_REPLY_FULFILLED":
            return { ...state };

        case "CREATE_REPLY_REJECTED":
            return { ...state };

        case "DELETE_REPLY_FULFILLED":
            return { ...state };

        case "DELETE_REPLY_REJECTED":
            return { ...state };

        case "LIKE_REPLY_FULFILLED": 
            return { ...state };
        
        case "UNLIKE_REPLY_REJECTED": 
            return { ...state, errors: action.payload.errors, message: action.payload.message };

        default:
            return { ...state };
    };
};

export default commentReducer;

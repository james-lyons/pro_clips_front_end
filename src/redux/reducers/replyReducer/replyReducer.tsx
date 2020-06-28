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
    error: null

}, action: Action) => {
    
    switch(action.type) {

        case "FETCH_REPLIES_FULFILLED":
            return { ...state };

        case "FETCH_REPLIES_REJECTED":
            return { ...state, error: action.payload.error };

        case "CREATE_REPLY_FULFILLED":
            return { ...state };

        case "CREATE_REPLY_REJECTED":
            return { ...state, error: action.payload.error };

        case "DELETE_REPLY_FULFILLED":
            return { ...state };

        case "DELETE_REPLY_REJECTED":
            return { ...state, error: action.payload.error };

        case "LIKE_REPLY_FULFILLED": 
            return { ...state };
        
        case "UNLIKE_REPLY_REJECTED": 
            return { ...state, error: action.payload.error };

        default:
            return { ...state };
    };
};

export default commentReducer;

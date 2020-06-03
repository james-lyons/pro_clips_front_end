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

        case "EDIT_REPLY_FULFILLED":
            return { ...state };

        case "EDIT_REPLY_REJECTED":
            return { ...state };

        case "DELETE_REPLY_FULFILLED":
            return { ...state };

        case "DELETE_REPLY_REJECTED":
            return { ...state };

        default:
            return { ...state };
    };
};

export default commentReducer;

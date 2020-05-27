import { State, Action } from './config';

function clipReducer(state: State = {
    clip: null,
    clipStream: null,
    errors: null,
    message: null
}, action: Action) {

    switch (action.type) {
        case "CLIP_UPLOAD_FULFILLED": 
            return { ...state };
        
        case "CLIP_UPLOAD_REJECTED": 
            return { ...state, errors: action.payload.errors, message: action.payload.message };

        case "FETCH_CLIP_FULFILLED": 
            return { ...state, clip: action.payload.data.clip };
        
        case "FETCH_CLIP_REJECTED": 
            return { ...state, errors: action.payload.errors, message: action.payload.message };

        case "FETCH_CLIP_STREAM_FULFILLED": 
            return { ...state, clipStream: action.payload.data.clip };
        
        case "FETCH_CLIP_STREAM_REJECTED": 
            return { ...state, errors: action.payload.errors, message: action.payload.message };

        default: 
            return { ...state };
    };
};

export default clipReducer;
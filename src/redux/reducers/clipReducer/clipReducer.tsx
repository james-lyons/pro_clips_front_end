import { State, Action } from './config';

function clipReducer(state: State = {
    clip: null,
    errors: null,
    message: null
}, action: Action) {

    switch (action.type) {
        case "CLIP_UPLOAD_FULFILLED": 
            return { ...state }
        
        case "CLIP_UPLOAD_REJECTED": 
            return { ...state, errors: action.payload.errors, message: action.payload.message };

        default: 
            return { ...state };
    };
};

export default clipReducer;
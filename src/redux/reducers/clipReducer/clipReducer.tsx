import { State, Action } from './config';

function clipReducer(state: State = {
    clip: null,
    clips: null,
    userClips: null,
    browseClips: null,
    gameClips: null,
    errors: null

}, action: Action) {

    switch (action.type) {
        case "CLIP_UPLOAD_FULFILLED": 
            return { ...state };
        
        case "CLIP_UPLOAD_REJECTED": 
            return { ...state, errors: action.payload.errors };

        case "CLIP_EDIT_FULFILLED": 
            return { ...state, clip: action.payload.data };
        
        case "CLIP_EDIT_REJECTED": 
            return { ...state, errors: action.payload.errors };

        case "FETCH_CLIP_FULFILLED": 
            return { ...state, clip: action.payload.data };
        
        case "FETCH_CLIP_REJECTED": 
            return { ...state, errors: action.payload.errors };

        case "FETCH_CLIPS_FULFILLED": 
            return { ...state, clip: action.payload.data.clip };
        
        case "FETCH_CLIPS_REJECTED": 
            return { ...state, errors: action.payload.errors };

        case "FETCH_USER_CLIPS_FULFILLED": 
            return { ...state, userClips: action.payload.data };
        
        case "FETCH_USER_CLIPS_REJECTED": 
            return { ...state, errors: action.payload.errors };

        case "FETCH_BROWSE_CLIPS_FULFILLED": 
            return { ...state, browseClips: action.payload.data };
        
        case "FETCH_BROWSE_CLIPS_REJECTED": 
            return { ...state, errors: action.payload.errors };

        case "FETCH_GAME_CLIPS_FULFILLED": 
            return { ...state, gameClips: action.payload.data };
        
        case "FETCH_GAME_CLIPS_REJECTED": 
            return { ...state, errors: action.payload.errors };

        case "LIKE_CLIP_FULFILLED": 
            return { ...state };
        
        case "UNLIKE_CLIP_REJECTED": 
            return { ...state, errors: action.payload.errors };

        default: 
            return { ...state };
    };
};

export default clipReducer;
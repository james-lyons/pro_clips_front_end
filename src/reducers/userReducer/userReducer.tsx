import { State, Action } from './reducer.config';

function userReducer(state: State = {
    user: {
        userName: '',
        email: '',
        bio: '',
        profile_image: '',
        posts: [],
        followers: [],
        following: [],
        id: ''
    },
    errors: null,
    message: null

}, action: Action) {

    switch(action.type) {

        case "FETCH_USER_FULFILLED": 
            return {
                ...state,
                user: {
                    userName: action.payload.data.userName,
                    profile_image: action.payload.data.profile_image,
                    bio: action.payload.data.bio,
                    email: action.payload.data.email,
                    posts: action.payload.data.posts,
                    comments: action.payload.data.comments,
                    followers: action.payload.data.followers,
                    following: action.payload.data.following,
                    id: action.payload.data._id,
                },
                errors: null,
                message: null
            };

        case "FETCH_USER_REJECTED": 
            return { ...state, errors: action.payload.errors, message: action.payload.message };

        case "EDIT_USER_FULFILLED": 
            return { ...state }

        case "EDIT_USER_REJECTED": 
            return { ...state, errors: action.payload.data.errors, message: action.payload.data.message };

        case "DELETE_USER_FULFILLED": 
            return { ...state }

        case "DELETE_USER_REJECTED": 
            return { ...state, errors: action.payload.data.errors, message: action.payload.data.message };

        default:
            return { ...state }
    };
};

export default userReducer;
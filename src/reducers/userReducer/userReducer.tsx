import { State, Action } from './config';

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
    message: null,
    editProfileErrors: null,
    editProfileMessage: null,
    editProfilePictureErrors: null,
    editProfilePictureMessage: null,
    editEmailErrors: null,
    editEmailMessage: null,
    editPasswordErrors: null,
    editPasswordMessage: null

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

        case "EDIT_PROFILE_FULFILLED": 
            return { ...state, errors: action.payload.errors, message: null }

        case "EDIT_PROFILE_REJECTED": 
            return { ...state, editProfileErrors: action.payload.errors, editProfileMessage: action.payload.message };

        case "EDIT_PROFILE_PICTURE_FULFILLED": 
            return { ...state, errors: null, message: null }

        case "EDIT_PROFILE_PICTURE_REJECTED": 
            return { ...state, errors: action.payload.errors, message: action.payload.message };

        case "EDIT_EMAIL_FULFILLED": 
            return { ...state, editEmailErrors: null, editEmailMessage: null }

        case "EDIT_EMAIL_REJECTED": 
            return { ...state, editEmailErrors: action.payload.errors, editEmailMessage: action.payload.message };

        case "EDIT_PASSWORD_FULFILLED": 
            return { ...state, editPasswordErrors: null, editPasswordMessage: null }

        case "EDIT_PASSWORD_REJECTED": 
            return { ...state, editPasswordErrors: action.payload.errors, editPasswordMessage: action.payload.message };

        case "DELETE_USER_FULFILLED": 
            return { ...state, user: {} }

        case "DELETE_USER_REJECTED": 
            return { ...state, errors: action.payload.data.errors, message: action.payload.data.message };

        default:
            return { ...state }
    };
};

export default userReducer;
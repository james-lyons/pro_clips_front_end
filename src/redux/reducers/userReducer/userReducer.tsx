import { State, Action } from './config';

function userReducer(state: State = {
    currentUser: {
        username: '',
        bio: '',
        profile_image: '',
        email: '',
        clips: [],
        comments: [],
        followers: [],
        following: [],
        id: ''
    },
    user: {
        username: '',
        bio: '',
        profile_image: '',
        clips: [],
        followers: [],
        following: [],
        isFollowed: false
    },
    errors: null,
    editProfileErrors: null,
    editProfilePictureErrors: null,
    editEmailErrors: null,
    editPasswordErrors: null,

}, action: Action) {

    switch(action.type) {

        case "FETCH_CURRENT_USER_FULFILLED": 
            return {
                ...state,
                currentUser: {
                    id: action.payload.data._id,
                    bio: action.payload.data.bio,
                    email: action.payload.data.email,
                    clips: action.payload.data.clips,
                    username: action.payload.data.username,
                    comments: action.payload.data.comments,
                    followers: action.payload.data.followers,
                    following: action.payload.data.following,
                    profile_image: action.payload.data.profile_image,
                },
                errors: null,
            };

        case "FETCH_CURRENT_USER_REJECTED": 
            return { ...state, errors: action.payload.errors };

        case "FETCH_USER_FULFILLED": 
            return {
                ...state,
                user: {
                    id: action.payload.data._id,
                    username: action.payload.data.username,
                    bio: action.payload.data.bio,
                    profile_image: action.payload.data.profile_image,
                    clips: action.payload.data.clips,
                    followers: action.payload.data.followers,
                    following: action.payload.data.following,
                    isFollowed: action.payload.data.isFollowed
                },
                errors: null,
            };

        case "FETCH_USER_REJECTED": 
            return { ...state, errors: action.payload.errors };

        case "EDIT_PROFILE_FULFILLED": 
            return {
                    ...state,
                    currentUser: {
                        id: action.payload.data._id,
                        bio: action.payload.data.bio,
                        email: action.payload.data.email,
                        clips: action.payload.data.clips,
                        username: action.payload.data.username,
                        comments: action.payload.data.comments,
                        followers: action.payload.data.followers,
                        following: action.payload.data.following,
                        profile_image: action.payload.data.profile_image,
                    },
                    errors: action.payload.data.errors
                }

        case "EDIT_PROFILE_REJECTED": 
            return { ...state, editProfileErrors: action.payload.errors };

        case "EDIT_PROFILE_PICTURE_FULFILLED": 
            return { ...state, errors: null }

        case "EDIT_PROFILE_PICTURE_REJECTED": 
            return { ...state, errors: action.payload.errors };

        case "EDIT_EMAIL_FULFILLED": 
            return { ...state, editEmailErrors: null }

        case "EDIT_EMAIL_REJECTED": 
            return { ...state, editEmailErrors: action.payload.errors };

        case "EDIT_PASSWORD_FULFILLED": 
            return { ...state, editPasswordErrors: null }

        case "EDIT_PASSWORD_REJECTED": 
            return { ...state, editPasswordErrors: action.payload.errors };

        case "DELETE_USER_FULFILLED": 
            return { ...state, user: {} }

        case "DELETE_USER_REJECTED": 
            return { ...state, errors: action.payload.data.errors };

        case "FOLLOW_USER_UPDATE_FULFILLED":
            return {
                ...state,
                user: {
                    isFollowed: true,
                    id: action.payload.data._id,
                    bio: action.payload.data.bio,
                    clips: action.payload.data.clips,
                    username: action.payload.data.username,
                    followers: action.payload.data.followers,
                    following: action.payload.data.following,
                    profile_image: action.payload.data.profile_image,
                }
            };

        case "UNFOLLOW_USER_UPDATE_FULFILLED":
            return {
                ...state,
                user: {
                    isFollowed: false,
                    id: action.payload.data._id,
                    bio: action.payload.data.bio,
                    clips: action.payload.data.clips,
                    username: action.payload.data.username,
                    followers: action.payload.data.followers,
                    following: action.payload.data.following,
                    profile_image: action.payload.data.profile_image,
                }
            };

        default:
            return { ...state }
    };
};

export default userReducer;

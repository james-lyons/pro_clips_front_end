interface CurrentUser {
    userName: string,
    email: string,
    bio: string,
    profile_image: string,
    posts: Array<object>,
    comments: Array<object>,
    followers: Array<object>,
    following: Array<object>,
    id: string
};

interface User {
    userName: string,
    bio: string,
    profile_image: string,
    posts: Array<object>,
    followers: Array<object>,
    following: Array<object>,
    isFollowed: boolean
};

interface State {
    user: User,
    currentUser: CurrentUser,
    errors: null | Array<object>,
    message: null | string,
    editProfileErrors: null | Array<object>,
    editProfileMessage: null | string,
    editProfilePictureErrors: null | Array<object>,
    editProfilePictureMessage: null | string,
    editEmailErrors: null | Array<object>,
    editEmailMessage: null | string,
    editPasswordErrors: null | Array<object>,
    editPasswordMessage: null | string
};

interface Action {
    type: string,
    payload: object
};

export {
    State,
    Action
};

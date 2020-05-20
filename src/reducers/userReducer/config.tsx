interface User {
    userName: string,
    email: string,
    bio: string,
    profile_image: string,
    posts: [],
    followers: [],
    following: [],
    id: string
};

interface State {
    user: User,
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
    User,
    State,
    Action
};

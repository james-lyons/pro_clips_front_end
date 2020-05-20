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
    message: null | string
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

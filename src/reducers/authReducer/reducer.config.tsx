interface User {
    userName: string,
    email: string,
    profile_image: string,
    id: string
};

interface State {
    user: User,
    errors: null | Array<string>,
    message: string
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

interface State {
    user: null | object,
};

interface Props {
    fetchUser: () => {},
    user: User,
    currentUser: CurrentUser
};

interface User {
    userName: string,
    email: string,
    bio: string,
    profile_image: string
};

interface CurrentUser {
    userName: string,
    email: string,
    bio: string,
    profile_image: string
};

export {
    State,
    Props
};

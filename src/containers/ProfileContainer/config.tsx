interface State {
    userName: string,
    bio: string,
    profile_image: string,
    posts: null | []
};

interface Props {
    fetchUser: () => {},
    user: User
};

interface User {
    userName: string,
    email: string,
    bio: string,
    profile_image: string
};

export {
    State,
    Props
};

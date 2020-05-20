interface State {
    userName: string,
    email: string,
    bio: string,
    profile_image: string,
    password: string,
    password2: string
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

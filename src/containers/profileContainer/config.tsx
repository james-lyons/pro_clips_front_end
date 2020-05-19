interface State {
    userName: string,
    email: string,
    bio: string,
    password: string,
    password2: string
};

interface Props {
    fetchUser: () => {}
};

export {
    State,
    Props
};

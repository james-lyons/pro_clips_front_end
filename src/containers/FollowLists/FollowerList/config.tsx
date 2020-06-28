interface State {
    user: null | User
};

interface Props {
    user: User,
    currentUser: User,
    match: { params: { username: string }},
    fetchFollowers: (username: string) => void
};

interface ReduxState {
    userReducer: UserReducer
};

interface UserReducer {
    user: User,
    currentUser: User
};

interface User {
    username: string,
    following: Array<string>
};

export {
    State,
    Props,
    ReduxState
};

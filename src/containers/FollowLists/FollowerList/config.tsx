interface State {
    user: null | User,
    showFollowers: boolean
};

interface Props {
    user: User,
    currentUser: User,
    match: { params: { username: string }},
    fetchFollowers: (userName: string) => void
};

interface ReduxState {
    userReducer: UserReducer
};

interface UserReducer {
    user: User,
    currentUser: User
};

interface User {
    userName: string,
    following: Array<string>
};

export {
    State,
    Props,
    ReduxState
};

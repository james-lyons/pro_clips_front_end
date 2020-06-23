interface State {
    user: null | User,
    showFollowing: boolean
};

interface Props {
    user: User,
    currentUser: User,
    match: { params: { username: string }},
    fetchFollowingList: (userName: string) => void
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

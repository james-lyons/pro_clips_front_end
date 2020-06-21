interface Props {
    currentUser: User,
    userLogout: (currentUserId: string) => void
};

interface User {
    userName: String
};

interface ReduxState {
    userReducer: CurrentUser
};

interface CurrentUser {
    currentUser: User
};

export {
    Props,
    ReduxState
};

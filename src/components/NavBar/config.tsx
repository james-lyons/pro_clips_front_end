interface Props {
    currentUser: User,
    activeItem: string,
    handleSelect: (event: Event) => void
    userLogout: (currentUserId: string) => void,
};

interface ReduxState {
    userReducer: CurrentUser
};

interface CurrentUser {
    currentUser: User
};

interface User {
    userName: String
};

interface Event {
    target: { text: string }
};

export {
    Props,
    ReduxState
};

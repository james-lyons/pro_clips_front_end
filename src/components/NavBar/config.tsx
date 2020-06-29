interface Props {
    visible: boolean,
    currentUser: User,
    activeItem: string,
    setVisibility: () => void,
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
    username: String
};

interface Event {
    target: { text: string }
};

export {
    Props,
    ReduxState
};

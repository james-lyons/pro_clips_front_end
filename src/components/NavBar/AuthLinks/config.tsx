interface Props {
    visible: boolean,
    currentUser: User,
    activeItem: string,
    setVisibility: () => void,
    handleSelect: (event: Event) => void,
    userLogout: (currentUserId: string) => void
};

interface User {
    userName: String
};

interface Event {
    target: { text: string }
};

export {
    Props
};

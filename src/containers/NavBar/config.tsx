interface State {
    activeItem: string,
    visible: boolean
};

interface Props {
    fetchCurrentUser: (currentUserId: string) => void
};

interface Event {
    target: { text: string }
};

export {
    State,
    Props,
    Event
};

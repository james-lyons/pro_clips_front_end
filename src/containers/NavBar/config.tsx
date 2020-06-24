interface State {
    activeItem: string
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

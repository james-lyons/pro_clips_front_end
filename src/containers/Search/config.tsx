interface State {
    search: string
};

interface Props {
    history: History
};

interface History {
    location: { pathname: string },
    push: (search: string) => void
}

interface Event {
    target: { value: string }
};

export {
    State,
    Props,
    Event
};

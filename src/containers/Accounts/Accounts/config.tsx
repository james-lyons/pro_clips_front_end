interface Props {
    setActiveItem: (activeItem: string) => void,
    history: { push: () => void }
}

interface Event {
    target: { text: string }
};

export {
    Props,
    Event
};

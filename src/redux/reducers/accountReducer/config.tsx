interface State {
    activeItem: string
};

interface Action {
    type: string,
    payload: { activeItem: string }
};

export {
    State,
    Action
};

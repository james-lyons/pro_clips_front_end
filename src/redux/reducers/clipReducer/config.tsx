interface State {
    clip: null | File,
    errors: null | Array<object>,
    message: null | string
};

interface Action {
    type: string,
    payload: object
};

export {
    State,
    Action
};
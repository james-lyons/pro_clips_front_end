interface State {
    clip: null | File,
    clipStream: any,
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
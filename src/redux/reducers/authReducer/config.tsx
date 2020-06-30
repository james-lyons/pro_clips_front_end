interface State {
    error: null | Error,
};

interface Action {
    type: string,
    payload: { error: Error, errors: Array<Error> }
};

interface Error {
    message: string
};

export {
    State,
    Action
};

interface State {
    error: null | Error,
    errors: null | Array<Error>
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

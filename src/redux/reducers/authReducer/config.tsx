interface State {
    errors: null | Array<Error>
};

interface Action {
    type: string,
    payload: { errors: Array<Error> }
};

interface Error {
    message: string
}

export {
    State,
    Action
};

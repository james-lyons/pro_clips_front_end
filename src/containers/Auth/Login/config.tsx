interface State {
    email: string,
    password: string,
    errors: null | Array<Error>,
    message: null | string
};

interface Props {
    history: History,
    errors: null | Array<Error>,
    message: null | string,
    setCurrentUser: () => void,
    userLogin: (user: User) => Promise<any>,
};

interface User {
    email: string,
    password: string
};

interface History {
    push: (location: string) => void
};

interface Event {
    target: Target
};

interface Target {
    name: TargetState,
    value: string
};

interface TargetState {
    userName: string,
    password: string,
};

interface Response {
    type: string,
    payload: Payload,
};

interface Payload {
    errors: Array<Error>,
    message: string,
    status: number
};

interface Error {
    message: string
};

export {
    State,
    Props,
    Event,
    Response
};

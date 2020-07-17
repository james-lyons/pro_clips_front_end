interface State {
    email: string,
    password: string,
    passwordType: string,
    error: null | Error
};

interface Props {
    history: History,
    error: null | Error,
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
    username: string,
    password: string,
};

interface Response {
    error: Error
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

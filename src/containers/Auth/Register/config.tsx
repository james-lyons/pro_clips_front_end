interface State {
    username: string,
    email: string,
    password: string,
    password2: string,
    error: null | { message: string }
};

interface Props {
    history: History,
    error: null | { message: string },
    setCurrentUser: () => void,
    userLogin: (user: User) => Promise<any>,
    userRegister: (newUser: NewUser) => Promise<any>
};

interface User {
    email: string,
    password: string
};

interface NewUser {
    username: string,
    email: string,
    password: string,
    password2: string,
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
    email: string,
    password: string,
    password2: string,
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

interface History {
    push: (location: string) => void
};

export {
    State,
    Props,
    Event,
    Response
};
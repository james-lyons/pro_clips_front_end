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
    userLogin: (user: User) => void,
};

interface User {
    email: string,
    password: string
};

interface Error {
    message: string
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

interface ReduxState {
    authReducer: AuthReducer
};

interface AuthReducer {
    message: string,
    errors: Array<Error>
};

export {
    State,
    Props,
    Event,
    ReduxState
};

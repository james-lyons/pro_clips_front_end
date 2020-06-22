interface State {
    userName: string,
    email: string,
    password: string,
    password2: string,
    errors: null | Array<Error>,
    message: null | string
};

interface Props {
    history: History,
    errors: null | Array<Error>,
    message: null | string,
    setCurrentUser: () => void,
    userLogin: (user: User) => void,
    userRegister: (newUser: NewUser) => void
};

interface User {
    email: string,
    password: string
};

interface NewUser {
    userName: string,
    email: string,
    password: string,
    password2: string,
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
    email: string,
    password: string,
    password2: string,
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
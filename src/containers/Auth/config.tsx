interface RegisterState {
    userName: string,
    email: string,
    password: string,
    password2: string,
    errors: null | Array<Error>,
    message: null | string
};

interface RegisterProps {
    history: History,
    errors: null | Array<Error>,
    message: null | string,
    setCurrentUser: () => void,
    userLogin: (user: User) => void,
    userRegister: (newUser: NewUser) => void
};

interface LoginState {
    email: string,
    password: string,
    errors: null | Array<Error>,
    message: null | string
};

interface LoginProps {
    history: History,
    errors: null | Array<Error>,
    message: null | string,
    setCurrentUser: () => void,
    userLogin: (user: User) => void,
};

interface Error {
    message: string
};

interface NewUser {
    userName: string,
    email: string,
    password: string,
    password2: string,
};

interface User {
    email: string,
    password: string
};

interface History {
    push: (location: string) => void
};

export {
    RegisterState,
    RegisterProps,
    LoginState,
    LoginProps
};

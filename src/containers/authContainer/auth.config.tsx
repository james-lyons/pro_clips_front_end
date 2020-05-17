interface RegisterState {
    userName: string,
    email: string,
    password: string,
    password2: string,
    errors: null | Array<String>,
    message: null | String
};

interface RegisterProps {
    setCurrentUser: () => {},
    userRegister: () => {},
    errors: null | Array<String>,
    message: null | String
};

interface LoginState {
    email: string,
    password: string,
    errors: null | Array<string>,
    message: null | string
};

interface LoginProps {
    setCurrentUser: () => {}
};

export {
    RegisterState,
    RegisterProps,
    LoginState,
    LoginProps
};

interface RegisterState {
    userName: string,
    email: string,
    password: string,
    password2: string,
    errors: Array<string> | null
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
    errors: Array<string> | null
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

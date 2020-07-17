interface Props {
    email: string,
    username: string,
    password: string,
    password2: string,
    passwordType: string,
    error: null | Error,
    registerSuccess: boolean,
    handleSubmit: () => void,
    handlePasswordType: () => void,
    handleChange: (event: Event) => void,
};

interface Error {
    message: string
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

export {
    Props
};

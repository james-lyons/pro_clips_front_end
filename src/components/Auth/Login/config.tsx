interface Props {
    email: string,
    password: string,
    passwordType: string,
    error: null | Error,
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

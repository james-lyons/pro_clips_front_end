interface State {
    password: string,
    password2: string,
    passwordType: string,
    userId: null | string,
    resetToken: null | string,
    submitSuccess: boolean,
    error: null | Error
};

interface Props {
    location: { search: string }
    resetPassword: (password: string, userId: string, resetToken: string) => void
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
    password: string,
    password2: string,
};

export {
    State,
    Props,
    Event
};

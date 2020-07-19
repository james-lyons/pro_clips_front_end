interface State {
    email: string,
    error: null | Error,
    submitSuccess: boolean
};

interface Props {
    recoverPassword: (email: string) => void
};

interface Error {
    message: string
};

interface Event {
    target: { value: string }
};

export {
    State,
    Props,
    Event
};

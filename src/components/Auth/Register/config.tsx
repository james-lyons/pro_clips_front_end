interface Props {
    userName: string,
    email: string,
    password: string,
    password2: string,
    message: string,
    errors: null | Array<Error>,
    handleChange: (event: Event) => void,
    handleSubmit: () => void
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
    userName: string,
    password: string,
};

export {
    Props
};

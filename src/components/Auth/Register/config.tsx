interface Props {
    username: string,
    email: string,
    password: string,
    password2: string,
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
    username: string,
    password: string,
};

export {
    Props
};

interface Props {
    email: string,
    oldPassword: string,
    password: string,
    password2: string,
    editEmailErrors: Array<Error>,
    editPasswordErrors: Array<Error>,
    handleChange: (event: Event) => void,
    editEmailSubmit: () => void,
    editPasswordSubmit: () => void,
};

interface Error {
    message: string
};

interface Event {
    target: Target,
};

interface Target {
    name: StateTargets,
    value: string
};

interface StateTargets {
    email: string,
    password: string,
    password2: string,
    oldPassword: string
};

export { 
    Props
};

interface Props {
    email: string,
    password: string,
    error: null | { message: string },
    handleChange: (event: Event) => void,
    handleSubmit: () => void,
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

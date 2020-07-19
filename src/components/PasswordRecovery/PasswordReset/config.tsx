interface Props {
    password: string,
    password2: string,
    passwordType: string,
    error: null | Error,
    submitSuccess: boolean,
    handleSubmit: () => void,
    handlePasswordType: () => void,
    handleChange: (event: Event) => void
};

interface Error {
    message: string
};

interface Event {
    target: { value: string }
};

export {
    Props
};

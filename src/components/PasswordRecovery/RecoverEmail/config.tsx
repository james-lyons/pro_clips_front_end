interface Props {
    email: string,
    error: null | Error,
    submitSuccess: boolean,
    handleSubmit: () => void,
    handleChange: (event: Event) => void,
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

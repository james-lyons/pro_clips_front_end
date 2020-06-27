interface Props {
    password: string,
    password2: string,
    oldPassword: string,
    editPasswordErrors: Array<{ message: string }>,
    handleChange: (event: Event) => void,
    editPasswordSubmit: () => void
};

interface Event {
    target: { name: string, value: string }
};

export {
    Props
};

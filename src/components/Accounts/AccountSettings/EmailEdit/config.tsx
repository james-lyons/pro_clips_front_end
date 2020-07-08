interface Props {
    email: string,
    editEmailErrors: Array<{ message: string }>,
    handleChange: (event: Event) => void,
    editEmailSubmit: () => void
};

interface Event {
    target: { name: string, value: string }
};

export {
    Props
};

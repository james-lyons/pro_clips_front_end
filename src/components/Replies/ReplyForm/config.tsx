interface Props {
    replyText: string,
    handleSubmit: () => void,
    handleChange: (event: Event) => void
};

interface Event {
    target: { value: string }
};

export {
    Props
};

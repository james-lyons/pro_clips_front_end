interface Props {
    activeItem: string,
    handleSelect: (event: Event) => void
};

interface Event {
    target: { text: string }
};

export {
    Props
};

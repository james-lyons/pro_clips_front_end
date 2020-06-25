interface Props {
    visible: boolean,
    activeItem: string,
    setVisibility: () => void,
    handleSelect: (event: Event) => void
};

interface Event {
    target: { text: string }
};

export {
    Props
};

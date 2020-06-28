interface Props {
    newTitle: null | string,
    handleClipEdit: () => void,
    handleChange: (event: Event) => void,
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

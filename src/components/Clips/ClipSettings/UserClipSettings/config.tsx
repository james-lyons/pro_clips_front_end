interface Props {
    clip: Clip,
    clipVis: string,
    newTitle: string,
    showClip: () => void,
    handleClipEdit: () => void,
    handleChange: (event: Event) => void,
    handleClipDelete: (clipId: string) => void
};

interface Clip {
    _id: string,
    key: string,
    game: string,
    title: string,
};

interface Event {
    target: Target
};

interface Target {
    value: string,
    name: TargetState
};

interface TargetState {
    clipVis: string,
    newTitle: string, 
};

export {
    Props
};

interface Props {
    clip: Clip,
    clipVis: string,
    newTitle: string,
    showClip: () => void,
    handleChange: () => void,
    handleClipEdit: () => void,
    handleClipDelete: (clipId: string) => void
};

interface Clip {
    _id: string,
    key: string,
    game: string,
    title: string,
};

export {
    Props
};

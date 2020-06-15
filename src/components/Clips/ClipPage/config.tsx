interface Props {
    clip: Clip,
    clipVis: string,
    newTitle: string,
    showClip: () => {},
    handleChange: () => {},
    handleClipEdit: (clipId: string) => {},
    handleClipDelete: (clipId: string) => {}
};

interface Clip {
    _id: string,
    poster: string,
    poster_name: string,
    title: string,
    key: string,
    url: string
}

export {
    Props
};

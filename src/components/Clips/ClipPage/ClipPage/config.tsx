interface Props {
    clip: Clip,
    clipVis: string,
    newTitle: string,
    showLoginModal: boolean,
    showClip: () => void,
    handleChange: () => void,
    handleClipEdit: (clipId: string) => void,
    handleClipDelete: (clipId: string) => void,
    handleShowLoginModal: () => void,
    handleCloseLoginModal: () => void
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

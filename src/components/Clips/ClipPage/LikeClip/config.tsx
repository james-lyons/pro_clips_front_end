interface Props {
    clip: Clip,
    showLoginModal: boolean,
    likeClip: (clipdId: string) => void,
    unlikeClip: (clipdId: string) => void,
    handleShowLoginModal: () => void,
    handleCloseLoginModal: () => void
};

interface Clip {
    _id: string,
    likes: Array<string>
};

export {
    Props,
    Clip
};

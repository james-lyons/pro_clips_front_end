interface Props {
    clip: Clip,
    likeClip: (clipdId: string) => void,
    unlikeClip: (clipdId: string) => void
};

interface Clip {
    _id: string,
    likes: Array<string>
};

export {
    Props,
    Clip
};

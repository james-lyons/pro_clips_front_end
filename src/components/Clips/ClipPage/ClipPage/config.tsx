interface Props {
    clip: Clip,
    clipVis: string,
    newTitle: string,
    showLoginModal: boolean,
    showClip: () => void,
    handleChange: (event: Event) => void,
    handleClipEdit: (clipId: string) => void,
    handleClipDelete: (clipId: string) => void,
    handleShowLoginModal: () => void,
    handleCloseLoginModal: () => void
};

interface Clip {
    _id: string,
    key: string,
    url: string,
    game: string,
    title: string,
    poster: string,
    poster_name: string
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

interface Props {
    clip: Clip,
    handleClipEdit: (clipId: string) => {},
    handleClipDelete: (clipId: string) => {}
};

interface ClipSettingsProps {
    clip: Clip,
};

interface UserClipSettingsProps {
    clip: Clip,
    handleClipEdit: (clipId: string) => {},
    handleClipDelete: (clipId: string) => {}
};

interface Clip {
    _id: string,
    poster: string,
    title: string,
    key: string,
    url: string
}

export {
    Props,
    ClipSettingsProps,
    UserClipSettingsProps
};

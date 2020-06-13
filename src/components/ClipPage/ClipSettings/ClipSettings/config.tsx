interface ClipSettingsProps {
    clip: Clip,
};

interface Clip {
    _id: string,
    poster: string,
    title: string,
    key: string,
    url: string
}

export {
    ClipSettingsProps
};

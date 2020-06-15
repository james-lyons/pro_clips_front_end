interface ClipSettingsProps {
    clip: Clip,
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
    ClipSettingsProps
};

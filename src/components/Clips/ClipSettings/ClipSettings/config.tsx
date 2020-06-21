interface ClipSettingsProps {
    clip: Clip,
};

interface Clip {
    _id: string,
    key: string,
    url: string,
    game: string,
    title: string,
    poster: string,
    poster_name: string
}

export {
    ClipSettingsProps
};

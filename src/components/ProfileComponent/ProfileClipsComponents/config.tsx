interface Props {
    user: User,
    game: string,
    userClips: Array<Clip>,
    handleChange: (event: any) => void
};

interface User {

};

interface Clip {
    game: string,
    title: string,
    url: string,
    _id: string
}

export {
    Props,
    Clip
};
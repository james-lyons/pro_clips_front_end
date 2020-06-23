interface Props {
    user: User,
    game: string,
    userClips: Array<Clip>,
    handleChange: (event: Event) => void
};

interface Event {
    target: { value: string }
};

interface User {
    bio: string,
    email: string,
    userName: string,
    clips: Array<Clip>,
    isFollowed: boolean,
    profile_image: string
};

interface Clip {
    _id: string,
    url: string,
    title: string,
    game: string,
    poster: string,
    poster_name: string,
    replies: Array<string>,
    comments: Array<string>
};

export {
    Props,
    Clip
};
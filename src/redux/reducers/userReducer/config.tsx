interface State {
    user: User,
    currentUser: CurrentUser,
    errors: null | Array<Error>,
    editProfileErrors: null | Array<Error>,
    editProfilePictureErrors: null | Array<Error>,
    editEmailErrors: null | Array<Error>,
    editPasswordErrors: null | Array<Error>,
};

interface Action {
    type: string,
    payload: object
};

interface User {
    username: string,
    bio: string,
    profile_image: string,
    clips: Array<Clip>,
    followers: Array<Follower>,
    following: Array<Follower>,
    isFollowed: boolean
};

interface CurrentUser {
    username: string,
    email: string,
    bio: string,
    profile_image: string,
    clips: Array<Clip>,
    comments: Array<Comment>,
    followers: Array<Follower>,
    following: Array<Follower>,
    id: string
};

interface Clip {
    _id: string,
    url: string,
    game: string,
    title: string,
    poster: string,
    poster_name: string,
};

interface Follower {
    username: string,
    profile_image: string
};

interface Comment {
    _id: string,
    clip_id: string,
    author_id: string,
    author_name: string,
    comment_text: string
};

interface Error {
    message: string
};

export {
    State,
    Action
};

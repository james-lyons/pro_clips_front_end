interface State {
    user: User,
    currentUser: CurrentUser,
    searchResults: Array<string>,
    searchResultsError: null | Error,
    errors: null | Array<Error>,
    fetchUserError: null | Error,
    editProfileErrors: null | Array<Error>,
    editProfilePictureErrors: null | Array<Error>,
    editEmailErrors: null | Array<Error>,
    editPasswordErrors: null | Array<Error>,
};

interface Action {
    type: string,
    payload: Payload
};

interface Payload {
    data?: User,
    error?: Error,
    status: Number,
    message?: string,
    errors?: Array<Error>
}

interface User {
    _id?: string,
    bio: string,
    email?: string,
    username: string,
    clips: Array<Clip>,
    profile_image: string,
    comments?: Array<Comment>,
    followers: Array<Follower>,
    following: Array<Follower>,
    isFollowed: boolean
};

interface CurrentUser {
    bio: string,
    email: string,
    username: string,
    clips: Array<Clip>,
    profile_image: string,
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

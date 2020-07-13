interface State {
    user: null | User,
    isMatch: boolean,
    isLoading: boolean,
    isFollowed: boolean,
    showFollowers: boolean,
    showFollowing: boolean
};

interface Props {
    user: User,
    currentUser: CurrentUser,
    match: { params: { username: string }},
    fetchUser: (username: string) => void,
    followUser: (username: string) => void,
    unfollowUser: (username: string) => void
};

interface ReduxState {
    userReducer: UserReducer
};

interface UserReducer {
    user: User,
    currentUser: CurrentUser
};

interface CurrentUser {
    _id: string,
    bio: string,
    email: string,
    username: string,
    clips: Array<Clip>,
    isFollowed: boolean,
    profile_image: string
};

interface User {
    _id: string,
    bio: string,
    email: string,
    username: string,
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
    State,
    Props,
    User,
    ReduxState
};

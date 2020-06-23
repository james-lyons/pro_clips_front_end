interface State {
    user: null | User,
    isMatch: boolean,
    isFollowed: boolean,
    showFollowers: boolean,
    showFollowing: boolean,
    showLoginModal: boolean,
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
    bio: string,
    email: string,
    userName: string,
    clips: Array<Clip>,
    isFollowed: boolean,
    profile_image: string
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
    State,
    Props,
    ReduxState
};

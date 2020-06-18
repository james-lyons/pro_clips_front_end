interface State {
    user: null | User,
    match: boolean,
    isFollowed: boolean,
    showLogin: boolean,
    showFollowers: boolean,
    showFollowing: boolean,
};

interface Props {
    user: User,
    currentUser: CurrentUser,
    match: object,
    fetchUser: (username: string) => void,
    followUser: (username: string) => void,
    unfollowUser: (username: string) => void
};

interface User {
    userName: string,
    email: string,
    bio: string,
    profile_image: string,
    isFollowed?: boolean
};

interface CurrentUser {
    userName: string,
    email: string,
    bio: string,
    profile_image: string
};

export {
    State,
    Props
};

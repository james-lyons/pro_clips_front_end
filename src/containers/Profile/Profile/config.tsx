interface State {
    user: null | User,
    match: boolean,
    isFollowed: boolean,
    showFollowers: boolean,
    showFollowing: boolean,
};

interface Props {
    user: User,
    currentUser: CurrentUser,
    match: object,
    fetchUser: (username: string) => {},
    followUser: (username: string) => {},
    unfollowUser: (username: string) => {}
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

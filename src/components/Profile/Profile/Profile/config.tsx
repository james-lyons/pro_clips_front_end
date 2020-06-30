interface Props {
    user: User,
    isMatch: boolean,
    isFollowed: boolean,
    followUser: (username: string) => void,
    unfollowUser:  (username: string) => void,
};

interface User {
    id: string,
    bio: string,
    username: string,
    clips: Array<Clip>,
    isFollowed: boolean
    profile_image: string,
};

interface Clip {
    _id: string,
    url: string,
    title: string,
    poster: string,
    poster_name: string,
    replies: Array<string>,
    comments: Array<string>
};

interface ReduxState {
    followerReducer: FollowProps
};

interface FollowProps {
    followersList: Array<Follower>,
    followingList: Array<Follower>
};

interface Follower {
    username: string,
    profile_image: string
};

export {
    Props,
    Follower,
    ReduxState
};

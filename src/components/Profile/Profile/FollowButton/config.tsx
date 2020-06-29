interface Props {
    username: string,
    isFollowed: boolean,
    followUser: (username: string) => void,
    unfollowUser: (username: string) => void
};

export {
    Props
};

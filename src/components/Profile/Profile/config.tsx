interface Props {
    user: User,
    followersList: Array<Follower>,
    followingList: Array<Follower>,
    currentUser: CurrentUser,
    match: boolean,
    isFollowed: boolean,
    showFollowers: boolean,
    showFollowing: boolean
    followUser: (userName: string) => void,
    unfollowUser:  (userName: string) => void,
    handleShowLogin: () => void,
    handleShowFollowers: () => void,
    handleShowFollowing: () => void,
    handleCloseLogin: () => void,
    handleCloseFollowers: () => void,
    handleCloseFollowing: () => void
};

interface User {
    userName: string,
    bio: string,
    profile_image: string,
    clips: [],
    followers: [],
    following: [],
    isFollowed: boolean
};

interface CurrentUser {
    userName: string,
    email: string,
    bio: string,
    profile_image: string,
    clips: [],
    followers: [],
    following: [],
    id: string
};

interface Follower {
    userName: string,
    profile_image: string
};

const styles = {
    headerWrapper: {
        borderBottom: '1px solid grey',
        height: '25vh',
        margin: '10vh auto',
        display: 'grid',
        gridTemplateColumns: '30% 70%'
    },
    ulWrapper: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        paddingInlineStart: '0px',
        padding: '.25rem'
    },
    h1: {
        display: 'inline-block',
        fontSize: '1.5rem',
        padding: '.25rem',
    },
    li: {
        marginRight: '1.25rem'
    },
    button: {
        textIndent: '0px',
        textShadow: 'none',
        display: 'inline-block',
        textAlign: 'center',
        alignItems: 'flex-start',
        font: '400 11px system-ui',
        padding: '1px 7px 2px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186)',
        borderImage: 'initial',
    }
};

export {
    Props,
    Follower,
    styles
};

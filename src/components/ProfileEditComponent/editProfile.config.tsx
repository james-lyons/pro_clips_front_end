interface Props {
    user: User
};

interface User {
    userName: string,
    email: string,
    bio: string,
    profile_image: string,
    posts: [],
    followers: [],
    following: [],
    id: string
}

const styles = {
    divWrapper: {
        minHeight: '80vh',
        border: '1px solid grey',
        margin: '0 auto',
        padding: '1rem'
    },
    editProfileImgDiv: {
        border:'1px solid grey',
        minHeight: '20vh',
        display: 'grid',
        gridTemplateColumns: '30% 70%'
    },
    editProfileDiv: {
        border:'1px solid grey',
        minHeight: '20vh',
        padding: '1rem',
        marginTop: '5px'
    }
};

export {
    Props,
    styles
};

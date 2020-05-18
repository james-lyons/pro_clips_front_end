interface Props {
    user: User,
    userName: string,
    email: string,
    bio: string,
    oldPassword: string,
    password: string,
    password2: string,
    handleChange: () => {},
    editUserSubmit: () => {},
    editPasswordSubmit: () => {},
    deleteUser: () => {}
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
        marginTop: '1rem',
        padding: '1rem'
    },
    editProfileImgDiv: {
        // borderBottom:'1px solid grey',
        minHeight: '20vh',
        display: 'grid',
        gridTemplateColumns: '30% 70%'
    },
    editProfileDiv: {
        borderTop:'1px solid grey',
        minHeight: '20vh',
        padding: '1rem',
        marginTop: '5px'
    },
    ul: {
        marginTop: '1rem',
        padding: '1rem',
        listStyle: 'none'
    }
};

export {
    Props,
    styles
};

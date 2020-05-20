interface Props {
    userName: string,
    email: string,
    bio: string,
    oldPassword: string,
    password: string,
    password2: string,
    edit_profile_success: null | string,
    edit_profile_picture_success: null | string,
    handleChange: () => {},
    editUserSubmit: () => {},
    editProfilePictureSubmit: () => {}
};

const styles = {
    divWrapper: {
        padding: '1rem'
    },
    editProfileImgDiv: {
        minHeight: '20vh',
        display: 'grid',
        gridTemplateColumns: '30% 70%'
    },
    editProfileDiv: {
        borderTop:'1px solid grey',
        minHeight: '20vh',
        padding: '1rem',
        marginTop: '5px'
    }
};

export {
    Props,
    styles
};

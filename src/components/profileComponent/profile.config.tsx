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
};

const styles = {
    headerWrapper: {
        borderBottom: '1px solid grey',
        height: '15vh',
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
    }
};

export {
    Props,
    styles
};

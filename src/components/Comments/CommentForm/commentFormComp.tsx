import React from 'react';
import { Props } from './config';
import LoggedIn from './loggedIn';
import LoggedOut from './loggedOut';

const CommentComponent: React.SFC<Props> = ({ commentText, handleChange, handleSubmit }) => {

    const currentUser = localStorage.getItem('uid');

    return (
        <>
            {
                currentUser
                ? <LoggedIn
                    commentText={ commentText }
                    handleChange={ handleChange }
                    handleSubmit={ handleSubmit }
                />
                : <LoggedOut />
            }
        </>
    );
};

export default CommentComponent;

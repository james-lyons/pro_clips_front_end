import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Props } from './config';

const CommentComponent: React.SFC<Props> = ({ commentText, handleChange, handleSubmit }) => {

    const currentUser = localStorage.getItem('uid');


    const loggedIn = () => {
        return (
            <Form onSubmit={ handleSubmit }>
                <Form.Group>
                    <Form.Control
                        type="text"
                        name="commentText"
                        value={ commentText }
                        placeholder='Add a comment'
                        onChange={ handleChange }
                    />
                </Form.Group>
            </Form>
        );
    };

    const loggedOut = () => {
        return (
            <div style={{ padding: '1rem' }}>
                <span><Link to="/login">Login</Link> to like or comment</span>
            </div>
        );
    };

    return (
        <>
            { currentUser ? loggedIn() : loggedOut() }
        </>
    );
};

export default CommentComponent;

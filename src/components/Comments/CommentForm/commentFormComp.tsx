import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';
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
            <span>Please login to like or comment</span>
        );
    };

    return (
        <>
            { currentUser ? loggedIn() : loggedOut() }
        </>
    );
};

export default CommentComponent;

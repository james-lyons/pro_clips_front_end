import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { Props } from './config';

const ReplyFormC: React.SFC <Props> = ({ replyText, handleChange, handleSubmit }) =>{

    const currentUser = localStorage.getItem('uid');

    const loggedIn = () => {
        return (
            <Form onSubmit={ handleSubmit }>
                <Form.Group>
                    <Form.Control
                        type="text"
                        name="commentText"
                        value={ replyText }
                        placeholder='Add a comment'
                        onChange={ handleChange }
                    />
                </Form.Group>
            </Form>
        );
    };


    const loggedOut = () => {
        return (
            <span>Please login to reply</span>
        );
    };

    return (
        <>
            { currentUser ? loggedIn() : loggedOut() }
        </>
    );
};

export default ReplyFormC;
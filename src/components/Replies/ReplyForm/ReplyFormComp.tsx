import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Props } from './config';

const ReplyFormComp: React.SFC <Props> = ({ replyText, handleChange, handleSubmit }) =>{

    const currentUser = localStorage.getItem('uid');

    const loggedIn = () => {
        return (
            <Form onSubmit={ handleSubmit }>
                <Form.Group>
                    <Form.Control
                        type="text"
                        name="replyText"
                        value={ replyText }
                        placeholder='Reply'
                        onChange={ handleChange }
                    />
                </Form.Group>
            </Form>
        );
    };

    const loggedOut = () => {
        return (
            <span><Link to="/login">Login</Link> to like, comment, or reply!</span>
        );
    };

    return (
        <>
            { currentUser ? loggedIn() : loggedOut() }
        </>
    );
};

export default ReplyFormComp;

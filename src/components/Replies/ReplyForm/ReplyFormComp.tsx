import React from 'react';
import { Props } from './config';
import { Link } from 'react-router-dom';
import { Form } from 'semantic-ui-react';

const ReplyFormComp: React.SFC <Props> = ({ replyText, handleChange, handleSubmit }) =>{

    const currentUser = localStorage.getItem('uid');

    const loggedIn = () => {
        return (
            <Form onSubmit={ handleSubmit } id='reply-form'>
                <Form.Field>
                    <Form.Input
                        type="text"
                        name="replyText"
                        placeholder='Reply'
                        value={ replyText }
                        onChange={ handleChange }
                    />
                </Form.Field>
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

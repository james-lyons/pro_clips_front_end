import React from 'react';
import { Form } from 'react-bootstrap';
import { LoggedInProps } from './config';

const LoggedIn: React.SFC<LoggedInProps> = ({
    commentText,
    handleSubmit,
    handleChange
}) => {
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

export default LoggedIn;
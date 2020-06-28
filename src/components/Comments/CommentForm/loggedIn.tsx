import React from 'react';
import { Form } from 'semantic-ui-react';
import { LoggedInProps } from './config';

const LoggedIn: React.SFC<LoggedInProps> = ({
    commentText,
    handleSubmit,
    handleChange
}) => {
    return (
        <Form onSubmit={ handleSubmit }>
            <Form.Field>
                <Form.Input
                    type="text"
                    name="commentText"
                    value={ commentText }
                    placeholder='Add a comment'
                    onChange={ handleChange }
                />
            </Form.Field>
        </Form>
    );
};

export default LoggedIn;
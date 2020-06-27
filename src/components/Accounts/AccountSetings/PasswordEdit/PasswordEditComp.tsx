import React from 'react';
import { Form, Message } from 'semantic-ui-react';
import { Props } from './config';

const PasswordEditComp: React.SFC<Props> = ({
    password,
    password2,
    oldPassword,
    editPasswordErrors,
    handleChange,
    editPasswordSubmit
}) => {
    return (
        <>
            <Form
                id='edit-password-form'
                onSubmit={ editPasswordSubmit }
            >

                {
                    editPasswordErrors && editPasswordErrors.map((error, i) => (
                        <Message negative key={ i } size='small'>
                            <Message.Header>{ error.message }</Message.Header>
                            <p>Please try again</p>
                        </Message>
                    ))
                }

                <Form.Field>
                    <Form.Input
                        required
                        label='Old Password'
                        type='password'
                        name='oldPassword'
                        value={ oldPassword }
                        onChange={ handleChange }
                    />
                </Form.Field>

                <Form.Field>
                    <Form.Input
                        required
                        label='New Password'
                        type='password'
                        name='password'
                        value={ password }
                        onChange={ handleChange }
                    />
                </Form.Field>

                <Form.Field>
                    <Form.Input
                        required
                        label='Confirm New Password'
                        type='password'
                        name='password2'
                        value={ password2 }
                        onChange={ handleChange }
                    />
                </Form.Field>

                <Form.Button
                    size='mini' basic color='red' type='submit'>
                        Save Changes
                </Form.Button>
            </Form>
        </>
    );
};

export default PasswordEditComp;
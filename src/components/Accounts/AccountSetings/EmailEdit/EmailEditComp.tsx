import React from 'react';
import { Form, Message } from 'semantic-ui-react';
import { Props } from './config';

const EmailEditComp: React.SFC<Props> = ({
    email,
    editEmailErrors,
    handleChange,
    editEmailSubmit
}) => {
    return (
        <>
            <Form
                id='edit-email-form'
                onSubmit={ editEmailSubmit }
            >

                {
                    editEmailErrors && editEmailErrors.map((error, i) => (
                        <Message negative key={ i } size='small'>
                            <Message.Header>{ error.message }</Message.Header>
                            <p>Please try again</p>
                        </Message>
                    ))
                }

                <Form.Field>
                    <Form.Input
                        required
                        label='Email'
                        type='email'
                        name='email'
                        placeholder='Enter Email'
                        value={ email }
                        onChange={ handleChange }
                    />
                </Form.Field>

                <Form.Button
                    size='mini' basic color='black' type='submit'>
                        Save Changes
                </Form.Button>
            </Form>
        </>
    );
};

export default EmailEditComp;
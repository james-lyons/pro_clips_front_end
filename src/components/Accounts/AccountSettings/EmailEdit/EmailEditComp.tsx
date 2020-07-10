import React from 'react';
import { Props } from './config';
import { Form, Message } from 'semantic-ui-react';

const EmailEditComp: React.SFC<Props> = ({
    email,
    editEmailErrors,
    handleChange,
    editEmailSubmit
}) => {
    
    const theme = localStorage.getItem('theme');

    return (
        <>
            <Form
                id='edit-email-form'
                inverted={ theme === 'dark' }
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
                    basic
                    size='tiny'
                    color='black'
                    type='submit'
                    inverted={ theme === 'dark' }
                >
                        Save Changes
                </Form.Button>
            </Form>
        </>
    );
};

export default EmailEditComp;

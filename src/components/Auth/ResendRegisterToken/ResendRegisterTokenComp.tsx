import React from 'react';
import { Props } from './config';
import { Link } from 'react-router-dom';
import { Form, Button, Message, Header, Label } from 'semantic-ui-react'

const ResendRegisterTokenComp: React.SFC<Props> = ({
    email,
    error,
    submitSuccess,
    handleChange,
    handleSubmit
}) => {

    const theme = localStorage.getItem('theme');
    const styles = {
        light: 'login-form',
        dark: 'login-form-dark'
    };

    return (
        <> 
            <Form
                onSubmit={ handleSubmit }
                inverted={ theme === 'dark' }
                id={ theme === 'dark' ? styles.dark : styles.light }
            >
                <Header as='h2' inverted={ theme === 'dark' }>Resend Email Confirmation</Header> 

                {
                    error && 
                    <Message negative size='small'>
                        <Message.Header>{ error.message }</Message.Header>
                        <span><Link to='/login'>Login</Link> here</span>
                    </Message>
                }
                {
                    submitSuccess &&
                    <Message size='small'>
                        <Message.Header>Your account verification email is on its way</Message.Header>
                        <p></p>
                    </Message>
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

                <Button
                    basic
                    color='black'
                    type='submit'
                    inverted={ theme === 'dark' }
                >
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default ResendRegisterTokenComp;
import React from 'react';
import { Props } from './config';
import { Form, Button, Message, Header } from 'semantic-ui-react'


const RecoverEmailComp: React.SFC<Props> = ({
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
                <Header as='h2' inverted={ theme === 'dark' }>Password Recovery</Header> 

                {
                    error && 
                    <Message negative size='small'>
                        <Message.Header>{ error.message }</Message.Header>
                        <p>Please try again</p>
                    </Message>
                }
                {
                    submitSuccess && 
                    <Message size='small'>
                        Your password recovery email is on it's way. Please check your inbox, it may take a few minutes.
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

export default RecoverEmailComp;

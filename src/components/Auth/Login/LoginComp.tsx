import React from 'react';
import { Props } from './config';
import { Form, Button, Message, Header } from 'semantic-ui-react'

const LoginComp: React.SFC<Props> = ({
    email,
    password,
    passwordType,
    error,
    handleChange,
    handleSubmit,
    handlePasswordType
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
                <Header as='h2' inverted={ theme === 'dark' }>Login</Header> 

                {
                    error && 
                    <Message negative size='small'>
                        <Message.Header>{ error.message }</Message.Header>
                        <p>Please try again</p>
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

                <Form.Field>
                    <Form.Input 
                        required
                        name='password'
                        label='password'
                        placeholder='Password'
                        value={ password }
                        type={ passwordType }
                        onChange={ handleChange }
                    />
                </Form.Field>

                <Button
                    basic
                    as='button'
                    color='black'
                    floated='right'
                    inverted={ theme === 'dark' }
                    onClick={ () => handlePasswordType() }
                >
                    Show Password
                </Button>

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

export default LoginComp;

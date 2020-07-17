import React from 'react';
import { Form, Button, Message, Header, Label } from 'semantic-ui-react';
import { Props } from './config';

const RegisterComp: React.SFC<Props> = ({
    email,
    username,
    password,
    password2,
    passwordType,
    error,
    registerSuccess,
    handleChange,
    handleSubmit,
    handlePasswordType
}) => {

    const theme = localStorage.getItem('theme');
    const styles = {
        light: 'register-form',
        dark: 'register-form-dark'
    };

    return (
        <>
            <Form
                onSubmit={ handleSubmit }
                inverted={ theme === 'dark' }
                id={ theme === 'dark' ? styles.dark : styles.light }
            >
                <Header as='h1' inverted={ theme === 'dark' }>Sign up</Header>

                { 
                    registerSuccess &&
                    <Message>
                        Thank you for signing up! Please check your inbox to confirm your email. It may take a few minutes to send.
                    </Message>
                }
                {
                    error && 
                    <Message size='small'>
                        <Message.Header>{ error.message }</Message.Header>
                        <p>Please try again</p>
                    </Message>
                }

                <Form.Input
                    required
                    type='text'
                    name='username'
                    label='Username'
                    placeholder='Enter Username'
                    value={ username }
                    onChange={ handleChange }
                />

                <Form.Input
                    required
                    type='email'
                    name='email'
                    label='Email'
                    placeholder='Enter Email'
                    value={ email }
                    onChange={ handleChange }
                />

                <Form.Input
                    required
                    name='password'
                    label='Password'
                    placeholder='Password'
                    value={ password }
                    type={ passwordType }
                    onChange={ handleChange }
                />

                <Form.Field>
                    <Form.Input
                        required
                        type={ passwordType }
                        name='password2'
                        label='Confirm Password'
                        placeholder='Password'
                        value={ password2 }
                        onChange={ handleChange }
                    />
                    <Label>
                        Password must be 8-16 characters and include an assortment of letters, numbers, and symbols
                    </Label>
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

export default RegisterComp;

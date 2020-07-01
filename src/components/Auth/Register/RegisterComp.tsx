import React from 'react';
import { Form, Button, Message, Header } from 'semantic-ui-react';
import { Props } from './config';

const RegisterComp: React.SFC<Props> = ({
    email,
    username,
    password,
    password2,
    error,
    handleChange,
    handleSubmit
}) => {

    const theme = localStorage.getItem('theme');
    const styles = {
        light: 'register-form',
        dark: 'register-form-dark'
    }

    return (
        <>
            <Form
                onSubmit={ handleSubmit }
                inverted={ theme === 'dark' }
                id={ theme === 'dark' ? styles.dark : styles.light }
            >
                <Header as='h1' inverted={ theme === 'dark' }>Sign up</Header>
                {
                    error && 
                    <Message size='small'>
                        <Message.Header>{ error.message }</Message.Header>
                        <p>Please try again</p>
                    </Message>
                }

                <Form.Input
                    required
                    label='Username'
                    type='text'
                    name='username'
                    placeholder='Enter Username'
                    value={ username }
                    onChange={ handleChange }
                />
                <Form.Input
                    required
                    label='Email'
                    type='email'
                    name='email'
                    placeholder='Enter Email'
                    value={ email }
                    onChange={ handleChange }
                />
                <Form.Input
                    required
                    label='Password'
                    type='password'
                    name='password'
                    placeholder='Enter Username'
                    value={ password }
                    onChange={ handleChange }
                />
                <Form.Input
                    required
                    label='Confirm Password'
                    type='password'
                    name='password2'
                    placeholder='Enter Username'
                    value={ password2 }
                    onChange={ handleChange }
                />
                
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

import React from 'react';
import { Props } from './config';
import { Form, Button, Message, Header, Label } from 'semantic-ui-react'


const PasswordResetComp: React.SFC<Props> = ({
    password,
    password2,
    passwordType,
    submitSuccess,
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
                        You've successfully updated your password.
                    </Message>
                }

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
                    color='black'
                    type='submit'
                    inverted={ theme === 'dark' }
                >
                    Submit
                </Button>

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
            </Form>
        </>
    );
};

export default PasswordResetComp;

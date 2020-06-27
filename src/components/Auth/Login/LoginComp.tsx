import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react'
import { Props } from './config';

const LoginComp: React.SFC<Props> = ({
    email,
    password,
    errors,
    handleChange,
    handleSubmit
}) => {

    return (
        <>  
            <Form id='login-form' onSubmit={ handleSubmit }>
                <h1>Login</h1>  

                {
                    errors && errors.map((error, i) => (
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

                <Form.Field>
                    <Form.Input 
                        required
                        label='password'
                        type='password'
                        name='password'
                        value={ password }
                        onChange={ handleChange }
                    />
                </Form.Field>

                <Button basic color='black' type='submit'>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default LoginComp;

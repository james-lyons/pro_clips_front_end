import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import { Props, styles } from './config';

const RegisterComp: React.SFC<Props> = ({
    email,
    userName,
    password,
    password2,
    errors,
    message,
    handleChange,
    handleSubmit
}) => {

    return (
        <>
            <Form
                style={ styles.form }
                onSubmit={ handleSubmit }
            >
                <h1>Sign up</h1>
                {/* <div style={{ marginBottom: '1rem' }}>
                    {
                        errors && errors.map((error, i) => (
                        <div
                            style={ styles.errorDiv } role="alert" key={ i }>
                            <p style={ styles.errorP }>{ error.message }  </p>
                        </div>
                        ))
                    }
                    {
                        message &&
                        <div style={ styles.errorDiv } role="alert">
                            <p style={ styles.errorP }>{ message }</p>
                        </div>
                    }
                </div> */}

                {
                    errors && errors.map((error, i) => (
                        <Message negative key={ i } size='small'>
                            <Message.Header>{ error.message }</Message.Header>
                            <p>Please try again</p>
                        </Message>
                    ))
                }

                <Form.Input
                    required
                    label='Username'
                    type='text'
                    name='userName'
                    placeholder='Enter Username'
                    value={ userName }
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
                
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default RegisterComp;

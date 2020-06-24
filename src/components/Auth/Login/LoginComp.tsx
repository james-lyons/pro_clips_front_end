import React from 'react';
import { Form, Button } from 'semantic-ui-react'
import { Props, styles } from './config';

const LoginComp: React.SFC<Props> = ({
    email,
    password,
    errors,
    message,
    handleChange,
    handleSubmit
}) => {

    return (
        <>
            <h1
                className="col-lg-4 col-md-6 col-sm-10 mb-4"
                style={ styles.h1 }>
                    Login
            </h1>  
            
            <Form
                style={ styles.form } onSubmit={ handleSubmit }
            >

                <div style={{ marginBottom: '1rem' }}>
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
                </div>

                <Form.Field>
                    <label>Email</label>
                    <input
                        required
                        type="email"
                        name="email"
                        value={ email }
                        onChange={ handleChange }
                        placeholder="Enter Email"
                    />
                </Form.Field>

                <Form.Field>
                    <label>Password</label>
                    <input 
                        required
                        type="password"
                        name="password"
                        value={ password }
                        onChange={ handleChange }
                    />
                </Form.Field>

                <Button type='submit'>Submit</Button>
            </Form>
        </>
    );
};

export default LoginComp;

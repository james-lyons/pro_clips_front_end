import React from 'react';
import { connect } from 'react-redux';
import { Form, Col, Button} from 'react-bootstrap';
import { RegisterComponentProps, styles } from './auth.config';

const RegisterComponent: React.SFC<RegisterComponentProps> = ({
    handleChange,
    handleSubmit,
    userName,
    email,
    password,
    password2,
    errors,
    message
}) => {

    return (
        <>
            <h1
                className="col-lg-4 col-md-6 col-sm-10 mb-4" style={ styles.h1 }>
                    Sign up
            </h1>

            <Form
                className="col-lg-4 col-md-6 col-sm-10 mb-4"
                style={ styles.form }
                onSubmit={ handleSubmit }
            >
                
                <div style={{ marginBottom: '1rem' }}>
                    {  errors && errors.map((error, i) => (
                        <div
                            style={ styles.errorDiv } role="alert" key={ i }>
                            <p style={ styles.errorP }>{ error.message }  </p>
                        </div>
                    ))}
                    { message &&
                        <div style={ styles.errorDiv } role="alert">
                            <p style={ styles.errorP }>{ message }</p>
                        </div>
                    }
                </div>

                <Form.Row>
                    <Form.Group as={ Col } controlId="formGridUserName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="userName"
                            placeholder="Enter Username"
                            value={ userName }
                            onChange={ handleChange }
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={ Col } controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={ email }
                            onChange={ handleChange }
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={ Col } controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={ password }
                            onChange={ handleChange }
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={ Col } controlId="formGridPassword2">
                        <Form.Label>Please confirm your password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            name="password2"
                            placeholder="Password"
                            value={ password2 }
                            onChange={ handleChange }
                        />
                    </Form.Group>
                </Form.Row>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default RegisterComponent;

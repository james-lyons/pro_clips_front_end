import React from 'react';
import { connect } from 'react-redux';
import { Form, Col, Button} from 'react-bootstrap';

interface Props {
    handleChange: () => {},
    handleSubmit: () => {},
    userName: String,
    email: String,
    password: String,
    password2: String
};

const RegisterComponent: React.SFC<Props> = ({
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
                className="col-lg-4 col-md-6 col-sm-10 mb-4"
                style={{ margin: '5rem auto .75rem', fontSize: '2rem', paddingLeft: '0' }}>
                    Sign up
            </h1>

            <Form
                className="col-lg-4 col-md-6 col-sm-10 mb-4"
                style={{ margin: '0 auto', border: '1px solid black', borderRadius: '5px', padding: '1.2rem' }}
                onSubmit={ handleSubmit }
            >
                
                    <div style={{ marginBottom: '1rem' }}>
                        {  errors && errors.map((error, i) => (
                            <div
                                style={{ width: '100%', backgroundColor: 'rgba(0,0,0,.5)', margin: '.5rem auto'}} role="alert" key={ i }>
                                <p style={{ color: 'black', padding: '.3rem', marginBottom: '2px', marginBlockStart: '0' }}>{ error.message }  </p>
                            </div>
                        ))}
                        { message &&
                            <div
                                style={{ width: '100%', backgroundColor: 'rgba(0,0,0,.5)', margin: '.5rem auto'}} role="alert">
                                <p style={{ color: 'black', padding: '.3rem', marginBottom: '2px', marginBlockStart: '0' }}>{ message }  </p>
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

const mapStateToProps = (state) => {
    return {
        errors: state.authReducer.errors,
        message: state.authReducer.message
    };
};

export default connect(mapStateToProps, null)(RegisterComponent);

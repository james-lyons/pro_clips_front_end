import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap';
import { deleteUser } from '../../../redux/actions/userActions/userActions';
import { Props, styles } from './config';

const editPasswordComponent: React.SFC <Props> = ({
    email,
    oldPassword,
    password,
    password2,
    editEmailErrors,
    editEmailMessage,
    editPasswordErrors,
    editPasswordMessage,
    handleChange,
    editEmailSubmit,
    editPasswordSubmit
}) => {
    return (
        <>
            <div style={ styles.divWrapper }>
                <div style={ styles.editEmailDiv }>
                    <Form onSubmit={ editEmailSubmit }>

                        <h1 style={{ fontSize: '1.6rem', fontWeight: 600 }}>Update your email info here!</h1>

                        <div style={{ margin: '1.5rem 0' }}>
                            {  editEmailErrors && editEmailErrors.map((error, i) => (
                                <div
                                    style={ styles.errorDiv } role="alert" key={ i }>
                                    <p style={ styles.errorP }>{ error.message }  </p>
                                </div>
                            ))}
                            { editEmailMessage &&
                                <div style={ styles.errorDiv } role="alert">
                                    <p style={ styles.errorP }>{ editEmailMessage }</p>
                                </div>
                            }
                        </div>

                        <Form.Group style={{ marginBottom: '0' }}>
                            <Form.Row>
                                <Form.Label column sm={ 3 }>
                                    Email
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        size="sm"
                                        name="email"
                                        value={ email }
                                        onChange={ handleChange }
                                    />
                                </Col>
                            </Form.Row>
                            <br/>
                        </Form.Group>
                        <Button variant="primary" type="submit" size="sm" style={{ marginLeft: '74%'}}>
                            Save Changes
                        </Button>
                    </Form>
                </div>
                <div style={ styles.editPasswordDiv }>
                    <Form onSubmit={ editPasswordSubmit }>
                        <h1 style={{ fontSize: '1.6rem', fontWeight: 600 }}>Update your password here!</h1>

                        <div style={{ margin: '1.5rem 0' }}>
                            {  editPasswordErrors && editPasswordErrors.map((error, i) => (
                                <div
                                    style={ styles.errorDiv } role="alert" key={ i }>
                                    <p style={ styles.errorP }>{ error.message }  </p>
                                </div>
                            ))}
                            { editPasswordMessage &&
                                <div style={ styles.errorDiv } role="alert">
                                    <p style={ styles.errorP }>{ editPasswordMessage }</p>
                                </div>
                            }
                        </div>

                        <Form.Group>
                            <Form.Row>
                                <Form.Label column sm={ 3 } style={{ fontSize: '.8rem'}}>
                                    Old Password
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        required
                                        type="password"
                                        name='oldPassword'
                                        value={ oldPassword }
                                        onChange={ handleChange }
                                    />
                                </Col>
                            </Form.Row>
                            <br/>
                            <Form.Row>
                                <Form.Label column sm={ 3 } style={{ fontSize: '.8rem'}}>
                                    New Password
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        required
                                        type="password"
                                        name="password"
                                        value={ password }
                                        onChange={ handleChange }
                                    />
                                </Col>
                            </Form.Row>
                            <br/>
                            <Form.Row>
                                <Form.Label column sm={ 3 } style={{ fontSize: '.8rem'}}>
                                    Confirm New Password
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        required
                                        type="password"
                                        name="password2"
                                        value={ password2 }
                                        onChange={ handleChange }
                                    />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Button variant="primary" type="submit" size="sm" style={{ marginLeft: '74%'}}>
                            Save Changes
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default connect(null, { deleteUser })(editPasswordComponent);
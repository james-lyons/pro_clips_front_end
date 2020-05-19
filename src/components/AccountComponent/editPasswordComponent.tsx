import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap';
import { deleteUser } from '../../actions/userActions/userActions';
import { styles } from './editProfile.config';

interface Props {
    oldPassword: string,
    password: string,
    password2: string,
    handleChange: () => {},
    editPasswordSubmit: () => {},
};

const editPasswordComponent: React.SFC<Props> = ({
    oldPassword,
    password,
    password2,
    handleChange,
    editPasswordSubmit
}) => {
    return (
        <>
            <div style={ styles.divWrapper }>
                <div style={ styles.editProfileDiv }>
                    <Form onSubmit={ editPasswordSubmit }>
                        <Form.Group>
                            <br/>
                            <Form.Row>
                                <Form.Label column sm={ 3 } style={{ fontSize: '.8rem'}}>
                                    Old Password
                                </Form.Label>
                                <Col>
                                    <Form.Control
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

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    };
};

export default connect(mapStateToProps, { deleteUser })(editPasswordComponent);
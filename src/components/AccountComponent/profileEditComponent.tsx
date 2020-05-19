import React from 'react';
import { connect } from 'react-redux';
import { Form , Col, Button } from 'react-bootstrap';
import { Props, styles } from './editProfile.config';

const ProfileEdit: React.SFC<Props> = ({
    user,
    userName,
    email,
    bio,
    handleChange,
    editUserSubmit
}) => {

    return (
        <>
            <div style={ styles.divWrapper }>
                <div style={ styles.editProfileImgDiv }>
                    <div style={{ padding: '1rem' }}>
                        <img src={ user.profile_image } style={{ height: '7rem', borderRadius: '100%' }}/>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ margin: '0 auto' }}>
                            <button>Update Profile Image</button>
                            <p>Must be a JPEG or PNG file</p>
                        </div>
                    </div>
                </div>
                <div style={ styles.editProfileDiv }>
                    <Form onSubmit={ editUserSubmit }>
                        <Form.Group>
                            <br/>
                            <Form.Row>
                                <Form.Label column sm={ 3 }>
                                    Username
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        size="sm"
                                        name="userName"
                                        value={ userName }
                                        onChange={ handleChange }
                                    />
                                </Col>
                            </Form.Row>
                            <br/>
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
                            <Form.Row>
                                <Form.Label column sm={ 3 }>
                                    Bio
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        as="textarea"
                                        size="sm"
                                        rows="3"
                                        name="bio"
                                        value={ bio }
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

export default connect(mapStateToProps, null)(ProfileEdit);

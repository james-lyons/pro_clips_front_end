import React from 'react';
import { connect } from 'react-redux';
import { Form , Col, Button } from 'react-bootstrap';
import { Props, styles } from './editProfile.config';
import { deleteUser } from '../../actions/userActions/userActions';

const PostComponent: React.SFC<Props> = ({
    user,
    userName,
    email,
    bio,
    oldPassword,
    password,
    password2,
    handleChange,
    editUserSubmit,
    editPasswordSubmit,
    deleteUser
}) => {

    return (
        <>
            <div className='col-lg-6 col-md-10 col-sm-12 mb-4' style={ styles.divWrapper }>
                <div style={ styles.editProfileImgDiv }>
                    <div style={{ padding: '1rem' }}>
                        <img src={ user.profile_image } style={{ height: '7rem', borderRadius: '100%' }}/>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div>
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
                                <Form.Label column sm={ 2 }>
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
                                <Form.Label column sm={ 2 }>
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
                                <Form.Label column sm={ 2 }>
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
                        <Button variant="primary" type="submit" size="sm" style={{ marginLeft: '82%'}}>
                            Save Changes
                        </Button>
                    </Form>
                </div>
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
                        <Button variant="primary" type="submit" size="sm" style={{ marginLeft: '82%'}}>
                            Save Changes
                        </Button>
                    </Form>
                </div>
                <div style={ styles.editProfileDiv }>
                    <h1 style={{ textAlign: 'center' }}>Delete Account</h1>
                    <Button variant="primary" onClick={() => deleteUser(user.id) } size="sm" style={{ marginLeft: '42%', marginTop: '1rem' }}>
                            Delete Account
                    </Button>
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

export default connect(mapStateToProps, { deleteUser })(PostComponent);

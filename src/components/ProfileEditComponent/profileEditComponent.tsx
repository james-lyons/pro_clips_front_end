import React from 'react';
import { connect } from 'react-redux';
import { Form , Col, Button } from 'react-bootstrap';
import { Props, styles } from './editProfile.config';

const PostComponent: React.SFC<Props> = ({ user }) => {

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
                    <Form>
                        <Form.Group>
                            <br/>
                            <Form.Row>
                                <Form.Label column lg={ 2 }>
                                    Username
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder={ user.userName }
                                    />
                                </Col>
                            </Form.Row>
                            <br/>
                            <Form.Row>
                                <Form.Label column lg={ 2 }>
                                    Email
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder={ user.email }
                                    />
                                </Col>
                            </Form.Row>
                            <br/>
                            <Form.Row>
                                <Form.Label column lg={ 2 }>
                                    Bio
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        as="textarea"
                                        rows="3"
                                        placeholder={ user.bio }
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
                    <Form>
                        <Form.Group>
                            <br/>
                            <Form.Row>
                                <Form.Label column lg={ 2 }>
                                    Old Password
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        type="password"
                                    />
                                </Col>
                            </Form.Row>
                            <br/>
                            <Form.Row>
                                <Form.Label column lg={ 2 }>
                                    New Password
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        type="password"
                                    />
                                </Col>
                            </Form.Row>
                            <br/>
                            <Form.Row>
                                <Form.Label column lg={ 2 }>
                                    Confirm New Password
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        type="password"
                                    />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Button variant="primary" type="submit" size="sm" style={{ marginLeft: '82%'}}>
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

export default connect(mapStateToProps, null)(PostComponent);

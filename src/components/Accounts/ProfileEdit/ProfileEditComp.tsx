import React from 'react';
import { Form , Col, Button } from 'react-bootstrap';
import { Props, styles } from './config';

const ProfileEditComp: React.SFC <Props> = ({
    bio,
    userName,
    profile_image,
    editProfileErrors,
    editProfileMessage,
    handleChange,
    editUserSubmit,
    editProfilePictureSubmit
}) => {

    return (
        <>
            <div style={ styles.divWrapper }>
                <div style={ styles.editProfileImgDiv }>

                    <div style={{ padding: '1rem' }}>
                        <img
                            src={ profile_image }
                            style={{ height: '7rem', borderRadius: '100%' }}
                        />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Form
                            className="col-12" style={{ padding: '1.3rem' }}
                            onSubmit={ editProfilePictureSubmit }
                        >
                            <h1 style={{
                                fontSize: '1.3rem',
                                fontWeight: 600, marginBottom: '1rem'
                            }}>
                                Change up yo look here!
                            </h1>

                            <Form.Group>
                                <Form.Row>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            size="sm"
                                            name="profile_image"
                                            value={ profile_image }
                                            onChange={ handleChange }
                                        />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Button
                                size="sm"
                                type="submit"
                                variant="primary"
                                style={{ marginLeft: '60%' }}
                            >
                                Save Changes
                            </Button>
                        </Form>
                    </div>
                </div>
                <div style={ styles.editProfileDiv }>
                    <Form onSubmit={ editUserSubmit }>
                    <h1 style={{
                            fontSize: '1.3rem',
                            fontWeight: 600, marginBottom: '1rem'
                        }}>
                            Update your profile here!
                    </h1>

                        <div style={{ margin: '1.5rem 0' }}>
                            {
                                editProfileErrors && editProfileErrors.map((error, i) => (
                                <div
                                    style={ styles.errorDiv } role="alert" key={ i }>
                                    <p style={ styles.errorP }>
                                        { error.message }
                                    </p>
                                </div>
                                ))
                            }
                            {
                                editProfileMessage &&
                                <div style={ styles.errorDiv } role="alert">
                                    <p style={ styles.errorP }>
                                        { editProfileMessage }
                                    </p>
                                </div>
                            }
                        </div>

                        <Form.Group>
                            <Form.Row>
                                <Form.Label column sm={ 3 }>
                                    Username
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        name="userName"
                                        value={ userName }
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
                                        size="sm"
                                        as="textarea"
                                        rows={ 3 }
                                        name="bio"
                                        value={ bio }
                                        onChange={ handleChange }
                                    />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Button
                            size="sm"
                            type="submit"
                            variant="primary"
                            style={{ marginLeft: '74%' }}
                        >
                            Save Changes
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default ProfileEditComp;

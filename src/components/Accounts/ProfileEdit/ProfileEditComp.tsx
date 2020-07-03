import React from 'react';
import { Props } from './config';
import { Grid, Form, Message, TextArea } from 'semantic-ui-react';

const ProfileEditComp: React.SFC <Props> = ({
    bio,
    username,
    profile_image,
    editProfileErrors,
    editProfileSuccess,
    handleChange,
    editUserSubmit,
    editProfilePictureSubmit
}) => {

    const theme = localStorage.getItem('theme');

    return (
        <>
            <Grid>
                <Message info size='mini' id='profile-edit-message'>
                    Update your profile here!
                </Message>


                <Grid.Row id='edit-profile-row-1'>
                    <Grid.Column
                        width={ 4 }
                        >
                        <img id='edit-profile-img' src={ profile_image } />
                    </Grid.Column>

                    <Grid.Column width={ 12 }>
                        <Form
                            id='edit-profile-form-1'
                            inverted={ theme === 'dark' }
                            onSubmit={ editProfilePictureSubmit }
                        >

                            <Form.Field>
                                <Form.Input
                                    label='Profile Image'
                                    type='text'
                                    name='profile_image'
                                    value={ profile_image }
                                    onChange={ handleChange }
                                />
                            </Form.Field>

                            <Form.Button
                                basic
                                color='black'
                                size='tiny'
                                type='submit'
                                inverted={ theme === 'dark' }
                            >
                                Save Change
                            </Form.Button>

                        </Form>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row id='edit-profile-row-2'>
                    <Form
                        id='edit-profile-form-2'
                        onSubmit={ editUserSubmit }
                        inverted={ theme === 'dark' }
                    >

                        {
                            editProfileErrors && editProfileErrors.map((error, i) => (
                                <Message negative key={ i } size='small'>
                                    <Message.Header>{ error.message }</Message.Header>
                                    <p>Please try again</p>
                                </Message>
                            ))
                        }

                        {
                            editProfileSuccess &&
                            <Message info>
                                Success!
                            </Message>
                        }

                        <Form.Field>
                            <Form.Input
                                id='edit-username-field'
                                label='Username'
                                type='text'
                                name='username'
                                value={ username }
                                onChange={ handleChange }
                            />
                        </Form.Field>

                        <Form.Field>
                            <Form.Input
                                id='edit-bio-field'
                                control={ TextArea }
                                textarea={ 4 }
                                label='Bio'
                                type='text'
                                name='bio'
                                value={ bio }
                                onChange={ handleChange }
                            />
                        </Form.Field>

                        <Form.Button
                            basic
                            size='tiny'
                            color='black'
                            type='submit'
                            inverted={ theme === 'dark' }
                        >
                            Save Changes
                        </Form.Button>
                    </Form>
                </Grid.Row>
            </Grid>
        </>
    );
};

export default ProfileEditComp;

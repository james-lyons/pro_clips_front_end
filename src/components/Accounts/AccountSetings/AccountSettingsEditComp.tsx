import React from 'react';
import { connect } from 'react-redux';
import { Props } from './config';
import { Grid, Message, Responsive } from 'semantic-ui-react';
import { deleteUser } from '../../../redux/actions/userActions/userActions';
import EditEmailComp from './EmailEdit/EmailEditComp';
import PasswordEditComp from './PasswordEdit/PasswordEditComp';

const EditAccountComp: React.SFC <Props> = ({
    email,
    password,
    password2,
    oldPassword,
    editEmailErrors,
    editPasswordErrors,
    handleChange,
    editEmailSubmit,
    editPasswordSubmit
}) => {
    return (
        <>
            <Grid>
                <Message info size='tiny' id='account-settings-message'>
                    Update your login credentials here!
                </Message>

                <Grid.Row id='account-settings-email-row'>
                    <EditEmailComp
                        email={ email }
                        editEmailErrors={ editEmailErrors }
                        handleChange={ handleChange }
                        editEmailSubmit={ editEmailSubmit }
                    />

                </Grid.Row>

                <Grid.Row id='account-settings-password-row'>
                    <PasswordEditComp
                        password={ password }
                        password2={ password2 }
                        oldPassword={ oldPassword }
                        editPasswordErrors={ editPasswordErrors }
                        editPasswordSubmit={ editPasswordSubmit }
                        handleChange={ handleChange }
                    />
                </Grid.Row>
            </Grid>
        </>
    );
};

export default connect(null, { deleteUser })(EditAccountComp);
import React from 'react';
import { Props } from './config';
import { connect } from 'react-redux';
import { Container, Message, Button } from 'semantic-ui-react';
import { deleteUser } from '../../../redux/actions/userActions/userActions';

const AccountDeleteComp: React.SFC <Props> = ({
    deleteUser
}) => {

    const currentUser = localStorage.getItem('uid');

    return (
        <>
            <Container>
                <Message id='account-delete-button'>
                    Are you sure you want to delete your account? We'd hate to see you go!
                </Message>
                <Button center='true' negative onClick={ () => deleteUser(currentUser) }>Delete Account</Button>
            </Container>
        </>
    );
};

export default connect(null, { deleteUser })(AccountDeleteComp);
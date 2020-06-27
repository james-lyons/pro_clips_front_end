import React from 'react';
import { connect } from 'react-redux';
import { Props, styles } from './config';
import { Container, Message, Button } from 'semantic-ui-react';
import { deleteUser } from '../../../redux/actions/userActions/userActions';

const AccountDeleteComp: React.SFC <Props> = ({
    deleteUser
}) => {

    const currentUser = localStorage.getItem('uid');

    return (
        <>
            {/* <div style={ styles.divWrapper }>
                <div style={ styles.editProfileDiv }>
                    <h1 style={{ textAlign: 'center' }}>Delete Account</h1>
                    <Button variant="primary" onClick={ () => deleteUser(currentUser) }
                        size="sm" style={{ marginLeft: '37%', marginTop: '1rem' }}>
                            Delete Account
                    </Button>
                </div>
            </div> */}
            <Container>
                <Message id='account-delete-button'>
                    Are you sure you want to delete your account? We'd hate to see you go!
                </Message>
                <Button center negative onClick={ () => deleteUser(currentUser) }>Delete Account</Button>
            </Container>
        </>
    );
};

export default connect(null, { deleteUser })(AccountDeleteComp);
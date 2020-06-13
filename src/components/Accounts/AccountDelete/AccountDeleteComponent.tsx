import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { deleteUser } from '../../../redux/actions/userActions/userActions';
import { styles } from './config';

interface Props {
    deleteUser: () => {}
};

const AccountDeleteComponent: React.SFC<Props> = ({
    deleteUser
}) => {
    const currentUser = localStorage.getItem('uid')
    return (
        <>
            <div style={ styles.divWrapper }>
                <div style={ styles.editProfileDiv }>
                    <h1 style={{ textAlign: 'center' }}>Delete Account</h1>
                    <Button variant="primary" onClick={ () => deleteUser(currentUser) }
                        size="sm" style={{ marginLeft: '37%', marginTop: '1rem' }}>
                            Delete Account
                    </Button>
                </div>
            </div>
        </>
    );
};

export default connect(null, { deleteUser })(AccountDeleteComponent);
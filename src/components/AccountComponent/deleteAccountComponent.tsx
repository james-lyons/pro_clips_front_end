import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap';
import { deleteUser } from '../../actions/userActions/userActions';
import { styles } from './editProfile.config';

interface Props {
    user: Object,
    deleteUser: () => {}
};

const deleteAccountComponent: React.SFC<Props> = ({
    user,
    deleteUser
}) => {
    return (
        <>
            <div style={ styles.divWrapper }>
                <div style={ styles.editProfileDiv }>
                    <h1 style={{ textAlign: 'center' }}>Delete Account</h1>
                    <Button variant="primary" onClick={ () => console.log(user) }
                        size="sm" style={{ marginLeft: '37%', marginTop: '1rem' }}>
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

export default connect(mapStateToProps, { deleteUser })(deleteAccountComponent);
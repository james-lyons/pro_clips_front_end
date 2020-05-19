import React from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../../../actions/userActions/userActions';
import deleteAccountComponent from '../../../AccountsComponent/deleteAccountComponent';

class DeleteAccount extends React.PureComponent<{}> {

    render() {
        return (
            <>
                <EditPasswordComponent />
            </>
        );
    };
};

export default DeleteAccount;
import React from 'react';
import { connect } from 'react-redux';
import { State, Props, ReduxState, Event } from './config';
import { fetchCurrentUser, editUserEmail, editUserPassword } from '../../../redux/actions/userActions/userActions';
import EditAccountComp from '../../../components/Accounts/AccountSettings/AccountSettings/AccountSettingsEditComp';

class AccountSettingsEdit extends React.PureComponent<Props, State> {

    state: State = {
        email: '',
        oldPassword: '',
        password: '',
        password2: '',
        editEmailErrors: null,
        editPasswordErrors: null,
    };

    private handleChange = (event: Event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private editEmailSubmit = async () => {
        event.preventDefault();
        let currentUserId = localStorage.getItem('uid');
        let { email } = this.state;
        let newEmail = { email };

        let {
            currentUser,
            editEmailErrors,
            editUserEmail
        } = this.props;

        if (email !== currentUser.email) {
            await editUserEmail(currentUserId, newEmail);
        };

        if (editEmailErrors) {
            this.setState({
                editEmailErrors: editEmailErrors,
            })
            return;
        } else {
            this.setState({
                email: 'Success',
                editEmailErrors: null,
            });
        };
    };

    private editPasswordSubmit = async () => {
        event.preventDefault();
        let user = localStorage.getItem('uid');
        let { oldPassword, password, password2 } = this.state;
        let newPassword = { oldPassword, password, password2 };

        let {
            editPasswordErrors,
            editUserPassword
        } = this.props;

        await editUserPassword(user, newPassword);

        if (editPasswordErrors) {
            this.setState({
                editPasswordErrors: editPasswordErrors,
            })
            return;
        } else {
            this.setState({
                password: '',
                password2: '',
                oldPassword: '',
                editPasswordErrors: null,
            });
        };
    };

    render() {
        const {
            email,
            password,
            password2,
            oldPassword,
            editEmailErrors,
            editPasswordErrors,
        } = this.state;
        const { handleChange, editPasswordSubmit, editEmailSubmit } = this;

        return (
            <>
                <EditAccountComp
                    email={ email }
                    password={ password }
                    password2={ password2 }
                    oldPassword={ oldPassword }
                    editEmailErrors={ editEmailErrors }
                    editPasswordErrors={ editPasswordErrors }
                    handleChange={ handleChange }
                    editEmailSubmit={ editEmailSubmit }
                    editPasswordSubmit={ editPasswordSubmit }
                />
            </>
        );
    };
};

const mapStateToProps = (state: ReduxState) => {
    return {
        currentUser: state.userReducer.currentUser,
        editEmailErrors: state.userReducer.editEmailErrors,
        editPasswordErrors: state.userReducer.editPasswordErrors,
    };
};

export default connect(mapStateToProps,
    { fetchCurrentUser, editUserEmail, editUserPassword }
)(AccountSettingsEdit);

import React from 'react';
import { State, Props, ReduxState, Event } from './config';
import { connect } from 'react-redux';
import { fetchCurrentUser, editUserEmail, editUserPassword } from '../../../redux/actions/userActions/userActions';
import EditPasswordComponent from '../../../components/Accounts/AccountSetings/AccountSettingsEditComp';

class AccountSettingsEdit extends React.PureComponent<Props, State> {

    state: State = {
        email: '',
        oldPassword: '',
        password: '',
        password2: '',
        editEmailErrors: null,
        editEmailMessage: null,
        editPasswordErrors: null,
        editPasswordMessage: null,
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
            editEmailMessage,
            editUserEmail
        } = this.props;

        if (email !== currentUser.email) {
            await editUserEmail(currentUserId, newEmail);
        };

        if (editEmailErrors) {
            this.setState({
                editEmailErrors: editEmailErrors,
                editEmailMessage: editEmailMessage
            })
            return;
        } else {
            this.setState({
                email: 'Success',
                editEmailErrors: null,
                editEmailMessage: null
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
            editPasswordMessage,
            editUserPassword
        } = this.props;

        await editUserPassword(user, newPassword);

        if (editPasswordErrors) {
            this.setState({
                editPasswordErrors: editPasswordErrors,
                editPasswordMessage: editPasswordMessage
            })
            return;
        } else {
            this.setState({
                password: '',
                password2: '',
                oldPassword: '',
                editPasswordErrors: null,
                editPasswordMessage: null
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
            editEmailMessage,
            editPasswordErrors,
            editPasswordMessage
        } = this.state;
        const { handleChange, editPasswordSubmit, editEmailSubmit } = this;

        return (
            <>
                <EditPasswordComponent
                    email={ email }
                    password={ password }
                    password2={ password2 }
                    oldPassword={ oldPassword }
                    editEmailErrors={ editEmailErrors }
                    editEmailMessage={ editEmailMessage }
                    editPasswordErrors={ editPasswordErrors }
                    editPasswordMessage={ editPasswordMessage }
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
        editEmailMessage: state.userReducer.editEmailMessage,
        editPasswordErrors: state.userReducer.editPasswordErrors,
        editPasswordMessage: state.userReducer.editPasswordMessage
    };
};

export default connect(mapStateToProps,
    { fetchCurrentUser, editUserEmail, editUserPassword }
)(AccountSettingsEdit);

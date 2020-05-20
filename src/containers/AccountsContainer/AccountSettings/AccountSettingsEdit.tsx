import React from 'react';
import { connect } from 'react-redux';
import EditPasswordComponent from '../../../components/AccountComponent/AccountSetings/AccountSettingsEditComponent';
import { editUserEmail, editUserPassword } from '../../../actions/userActions/userActions';
import { State } from './config';

class AccountSettingsEdit extends React.PureComponent<{}, State> {

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

    private handleChange = (event:any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private editEmailSubmit = async () => {
        event.preventDefault();
        let user = localStorage.getItem('uid');
        let { email } = this.state;
        let newEmail = { email };

        await this.props.editUserEmail(user, newEmail);

        if (this.props.editEmailErrors) {
            console.log(this.props)
            this.setState({
                editEmailErrors: this.props.editEmailErrors,
                editEmailMessage: this.props.editEmailMessage
            })
            return;
        } else {
            this.setState({
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

        await this.props.editUserPassword(user, newPassword);

        if (this.props.editPasswordErrors) {
            this.setState({
                editPasswordErrors: this.props.editPasswordErrors,
                editPasswordMessage: this.props.editPasswordMessage
            })
            return;
        } else {
            this.setState({
                editPasswordError: null,
                editPasswordMessage: null
            });
        };
    };

    render() {
        const {
            oldPassword,
            password,
            password2,
            editEmailErrors,
            editEmailMessage,
            editPasswordErrors,
            editPasswordMessage
        } = this.state;
        const { handleChange, editPasswordSubmit, editEmailSubmit } = this;

        return (
            <>
                <EditPasswordComponent
                    editEmailErrors={ editEmailErrors }
                    editEmailMessage={ editEmailMessage }
                    editPasswordErrors={ editPasswordErrors }
                    editPasswordMessage={ editPasswordMessage }
                    oldPassword={ oldPassword }
                    password={ password }
                    password2={ password2 }
                    handleChange={ handleChange }
                    editEmailSubmit={ editEmailSubmit }
                    editPasswordSubmit={ editPasswordSubmit }
                />
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        editEmailErrors: state.userReducer.editEmailErrors,
        editEmailMessage: state.userReducer.editEmailMessage,
        editPasswordErrors: state.userReducer.editPasswordErrors,
        editPasswordMessage: state.userReducer.editPasswordMessage
    };
};

export default connect(mapStateToProps, { editUserEmail, editUserPassword })(AccountSettingsEdit);
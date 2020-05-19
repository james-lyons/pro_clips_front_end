import React from 'react';
import { connect } from 'react-redux';
import EditPasswordComponent from '../../../components/AccountComponent/PasswordEdit/PasswordEditComponent';
import { editUserPassword } from '../../../actions/userActions/userActions';
import { State } from './config';

class PasswordEdit extends React.PureComponent<{}, State> {

    state: State = {
        oldPassword: '',
        password: '',
        password2: '',
        errors: null,
        message: null
    };

    private handleChange = (event:any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private editPasswordSubmit = async () => {
        event.preventDefault();
        let user = localStorage.getItem('uid');
        let { oldPassword, password, password2 } = this.state;
        let passwordChange = { oldPassword, password, password2 };

        await this.props.editUserPassword(user, passwordChange);

        if (this.props.errors) {
            console.log(this.props)
            this.setState({
                errors: this.props.errors,
                message: this.props.message
            })
            return;
        } else {
            this.setState({
                errors: null,
                message: null
            });
        };
    };

    render() {
        const { oldPassword, password, password2, errors, message } = this.state;
        const { handleChange, editPasswordSubmit } = this;

        return (
            <>
                <EditPasswordComponent
                    errors={ errors }
                    message={ message }
                    oldPassword={ oldPassword }
                    password={ password }
                    password2={ password2 }
                    handleChange={ handleChange }
                    editPasswordSubmit={ editPasswordSubmit }
                />
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        errors: state.userReducer.errors,
        message: state.userReducer.message
    };
};

export default connect(mapStateToProps, { editUserPassword })(PasswordEdit);
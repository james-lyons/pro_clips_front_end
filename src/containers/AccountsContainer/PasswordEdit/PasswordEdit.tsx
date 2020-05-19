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

    private editPasswordSubmit = () => {
        event.preventDefault();
        let user = localStorage.getItem('uid');
        let { oldPassword, password, password2 } = this.state;
        let passwordChange = { oldPassword, password, password2 };
        this.props.editUserPassword(user, passwordChange);
    };

    render() {
        const { oldPassword, password, password2 } = this.state;
        const { handleChange, editPasswordSubmit } = this;

        return (
            <>
                <EditPasswordComponent
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
        user: state.userReducer.user
    };
};

export default connect(mapStateToProps, { editUserPassword })(PasswordEdit);
import React from 'react';
import { connect } from 'react-redux';
import { userRegister } from '../../actions/authActions';
import RegisterComponent from '../../components/authComponents/RegisterComponent';
import { RegisterState, RegisterProps } from './auth.config';

class Register extends React.PureComponent<RegisterProps, RegisterState> {

    state: RegisterState = {
        userName: "",
        email: "",
        password: "",
        password2: "",
        errors: null
    };

    private handleChange = (event:any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = async (event:any) => {
        event.preventDefault();

        const { userName, email, password, password2 } = this.state;
        const newUser = { userName, email, password, password2 };

        this.props.userRegister(newUser);
    };

    render() {

        const { userName, email, password, password2, errors } = this.state;

        return (
            <>
                <RegisterComponent
                    userName={ userName }
                    email={ email }
                    password={ password }
                    password2={ password2 }
                    errors={ errors }
                    handleChange={ this.handleChange }
                    handleSubmit={ this.handleSubmit }
                />
            </>
        );
    }
};

export default connect(null, { userRegister })(Register);

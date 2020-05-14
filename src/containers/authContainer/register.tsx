import React from 'react';
import { connect } from 'react-redux';
import { userRegister } from '../../actions/authActions';
import RegisterComponent from '../../components/authComponents/RegisterComponent';

interface State {
    userName: string,
    email: string,
    password: string,
    password2: string,
    errors: Array<string> | null
};

interface Props {
    setCurrentUser: () => {},
    userRegister: () => {},
    errors: null | Array<String>,
    message: null | String
};

class Register extends React.PureComponent<Props, State> {

    state: State = {
        userName: "",
        email: "",
        password: "",
        password2: "",
        errors: null
    };

    private handleChange = (event:any) => {
        console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = async (event:any) => {
        event.preventDefault();

        const { userName, email, password, password2 } = this.state;
        const newUser = { userName, email, password, password2 };

        console.log('Hello 1. NewUser:', newUser)

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

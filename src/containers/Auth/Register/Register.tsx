import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event, Response } from './config';
import { userRegister, userLogin } from '../../../redux/actions/authActions/authActions';
import RegisterComp from '../../../components/Auth/Register/RegisterComp';

class Register extends React.PureComponent<Props, State> {

    state: State = {
        email: "",
        username: "",
        password: "",
        password2: "",
        passwordType: 'password',
        registerSuccess: false,
        error: null
    };

    private handleChange = (event: Event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = async () => {
        event.preventDefault();
        
        const { userRegister } = this.props;
        const { username, email, password, password2 } = this.state;
        const newUser = { username, email, password, password2 };

        const symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ];
        const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        let includesNumber= false;
        let includesLetter = false;
        let includesSymbol = false;

        letters.forEach(letter => {
            if (password.split('').includes(letter)) {
                console.log(letter);
                return includesLetter = true;
            };
            return;
        });

        numbers.forEach(number => {
            if (password.split('').includes(number)) {
                console.log(number);
                return includesNumber = true;
            };
            return;
        });

        symbols.forEach(symbol => {
            if (password.split('').includes(symbol)) {
                console.log(symbol);
                return includesSymbol = true;
            };
            return;
        });

        if (password.length < 8 || password.length > 16) {
            this.setState({ error: { message: 'Password must be at 8 to 16 characters long' }});
            return;

        } else if (password2.length < 8 || password2.length > 16) {
            this.setState({ error: { message: 'Password must be at 8 to 16 characters long' }});
            return;

        } else if (!includesNumber || !includesLetter || !includesSymbol) {
            this.setState({ 
                error: { message: 'Password must include at least one letter, number, and symbol' }})
            return;

        } else if (password !== password2) {
            this.setState({ error: { message: 'Password must match' }});
            return;
        };

        const res: Response = await userRegister(newUser);

        if (res.type === 'USER_REGISTRATION_REJECTED') {
            this.setState({ error: res.payload.error })
            return;

        } else if (res.type === 'USER_REGISTRATION_FULFILLED') {
            await this.setState({ error: null, registerSuccess: true });
        };
    };

    private handlePasswordType = () => {
        event.preventDefault();
        const { passwordType } = this.state;

        passwordType === 'password'
        ? this.setState({ passwordType: 'text' })
        : this.setState({ passwordType: 'password' })
    };

    render() {

        const { username, email, password, password2, passwordType, error, registerSuccess } = this.state;
        const { handleSubmit, handleChange, handlePasswordType } = this;

        return (
            <>
                <RegisterComp
                    email={ email }
                    username={ username }
                    password={ password }
                    password2={ password2 }
                    passwordType={ passwordType }
                    error={ error }
                    registerSuccess={ registerSuccess }
                    handleChange={ handleChange }
                    handleSubmit={ handleSubmit }
                    handlePasswordType={ handlePasswordType }
                />
            </>
        );
    }
};

export default connect(null, { userRegister, userLogin })(Register);

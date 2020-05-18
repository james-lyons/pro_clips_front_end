import React from 'react';
import { connect } from 'react-redux';
import ProfileEditComponent from '../../components/AccountComponent/profileEditComponent';
import { fetchUser, editUserProfile, editUserPassword } from '../../actions/userActions/userActions';
import { Props, State } from './config';

class ProfileEdit extends React.PureComponent<Props, State> {

    state: State = {
        userName: '',
        email: '',
        bio: '',
        oldPassword: '',
        password: '',
        password2: ''
    };

    private componentDidMount = async () => {
        let user = localStorage.getItem('uid');
        let data = await this.props.fetchUser(user);
        let { userName, email, bio } = data.payload.data;

        this.setState({
            userName,
            email,
            bio
        });
    };

    private handleChange = (event:any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private editUserSubmit = () => {
        event.preventDefault();
        let user = localStorage.getItem('uid');
        let { userName, email, bio } = this.state;
        let profileChanges = { userName, email, bio }
        this.props.editUserProfile(user, profileChanges)
    };

    private editPasswordSubmit = () => {
        event.preventDefault();
        let user = localStorage.getItem('uid');
        let { oldPassword, password, password2 } = this.state;
        let passwordChange = { oldPassword, password, password2 };
        this.props.editUserPassword(user, passwordChange);
    };
    
    render() {
        const { userName, email, bio, oldPassword, password, password2 } = this.state;
        const { handleChange, editUserSubmit, editPasswordSubmit } = this;

        return (
            <>
                <ProfileEditComponent
                    userName={ userName }
                    email={ email }
                    bio={ bio }
                    oldPassword={ oldPassword }
                    password={ password }
                    password2={ password2 }
                    handleChange={ handleChange }
                    editUserSubmit={ editUserSubmit }
                    editPasswordSubmit={ editPasswordSubmit }
                />
            </>
        );
    };
};

export default connect(null, { fetchUser, editUserProfile, editUserPassword })(ProfileEdit);
import React from 'react';
import { connect } from 'react-redux';
import ProfileClipsComponent from '../../../components/ProfileComponent/ProfileClipsComponents/ProfileClipsComponent';
import { State, Props } from './config';
import { fetchUserClips } from '../../../redux/actions/clipActions/clipActions';
import { userLogin } from '../../../redux/actions/authActions/authActions';

class ProfileClips extends React.PureComponent<Props, State> {
    state: State = {
        clipName: '',
        userClips: null
    };

    private componentDidMount = async () => {
        await this.props.fetchUserClips();
        this.setState({
            userClips: this.props.userClips
        });
    };

    render() {
        const { user } = this.props;
        const { userClips } = this.state;

        return (
            <>
                { user && userClips && <ProfileClipsComponent user={ user } userClips={ userClips } /> }
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        userClips: state.clipReducer.userClips
    };
};

export default connect(mapStateToProps, { fetchUserClips })(ProfileClips);

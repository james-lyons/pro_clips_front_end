import React from 'react';
import { connect } from 'react-redux';
import ProfileClipsComponent from '../../../components/ProfileComponent/ProfileClipsComponents/ProfileClipsComponent';
import { State, Props } from './config';
import { fetchClip } from '../../../redux/actions/clipActions/clipActions';
import { userLogin } from '../../../redux/actions/authActions/authActions';

class ProfileClips extends React.PureComponent<Props, State> {
    state: State = {
        clipName: '',
        clip: null
    };

    private componentDidMount = async () => {
        let currentUserId = localStorage.getItem('uid');
        let firstClip = this.props.user.clips[0];
        await this.props.fetchClip(firstClip);
        this.setState({
            clip: this.props.clip
        });
        console.log(this.state);
    };

    render() {
        const { user } = this.props;
        const { clip } = this.state;

        return (
            <>
                { user && clip && <ProfileClipsComponent user={ user } clip={ clip } /> }
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        clip: state.clipReducer.clip
    };
};

export default connect(mapStateToProps, { fetchClip })(ProfileClips);

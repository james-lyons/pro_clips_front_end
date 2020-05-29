import React from 'react';
import { connect } from 'react-redux';
import ProfileClipsComponent from '../../../components/ProfileComponent/ProfileClipsComponents/ProfileClipsComponent';
import { State, Props } from './config';
import { fetchUserClips } from '../../../redux/actions/clipActions/clipActions';

class ProfileClips extends React.PureComponent<Props, State> {
    state: State = {
        userClips: null,
        newTitle: ''
    };

    componentDidMount = async () => {
        let { user } = this.props;
        
        if (user.clips.length > 0) {
            await this.props.fetchUserClips(user.userName);
            this.setState({
                userClips: this.props.userClips
            });
        };
    };

    render() {
        const { user } = this.props;
        const { userClips } = this.state;

        return (
            <>
                {
                    user && userClips &&
                    <ProfileClipsComponent
                        user={ user }
                        userClips={ userClips }
                    />
                }
            </>
        );
    };
};

const mapStateToProps = (state: any) => {
    return {
        user: state.userReducer.user,
        userClips: state.clipReducer.userClips
    };
};

export default connect(mapStateToProps, { fetchUserClips })(ProfileClips);

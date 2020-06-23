import React from 'react';
import { connect } from 'react-redux';
import { State, Props, ReduxState, Event } from './config';
import { fetchUserClips } from '../../../redux/actions/clipActions/clipActions';
import ProfileClipsComp from '../../../components/Profile/ProfileClips/ProfileClipsComp';

class ProfileClips extends React.PureComponent<Props, State> {
    state: State = {
        game: '',
        newTitle: '',
        userClips: null
    };

    componentDidMount = async () => {
        let { user, fetchUserClips } = this.props;
        
        if (user.clips.length > 0) {
            await fetchUserClips(user.userName);
            await this.setState({ userClips: this.props.userClips });
        };
    };

    private handleChange = (event: Event) => {        
        this.setState({
            game: event.target.value
        });
    };

    render() {
        const { user } = this.props;
        const { userClips, game } = this.state;
        const { handleChange } = this;

        return (
            <>
                {
                    user && userClips &&
                    <ProfileClipsComp
                        user={ user }
                        game={ game }
                        userClips={ userClips }
                        handleChange={ handleChange }
                    />
                }
            </>
        );
    };
};

const mapStateToProps = (state: ReduxState) => {
    return {
        user: state.userReducer.user,
        userClips: state.clipReducer.userClips
    };
};

export default connect(mapStateToProps, { fetchUserClips })(ProfileClips);

import React from 'react';
import { connect } from 'react-redux';
import { State, Props, ReduxState, Event } from './config';
import { fetchUserClips } from '../../../redux/actions/clipActions/clipActions';
import ProfileClipsComp from '../../../components/Profile/ProfileClips/ProfileClipsComp';

class ProfileClips extends React.PureComponent<Props, State> {
    state: State = {
        user: null,
        game: '',
        newTitle: '',
        userClips: null
    };

    componentDidUpdate = async (props: any) => {
        const { userClips, user } = this.state;
        const { fetchUserClips } = this.props;

        if (!user && this.props.user) {
            this.setState({ user: this.props.user });

        };

        if (userClips) {
            return;
        } else if (user.clips.length > 0) {
            let res = await fetchUserClips(user.username);
            this.setState({ userClips: res.payload.data});
            return;
        };
    };

    componentDidMount = async () => {
        const { user, fetchUserClips } = this.props;
        
        if (user.clips.length > 0) {
            await fetchUserClips(user.username);
            await this.setState({ userClips: this.props.userClips });
        };
    };

    private handleChange = (event: Event) => {        
        this.setState({
            game: event.target.value
        });
    };

    render() {
        const { user, userClips, game } = this.state;
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
        userClips: state.clipReducer.userClips
    };
};

export default connect(mapStateToProps, { fetchUserClips })(ProfileClips);

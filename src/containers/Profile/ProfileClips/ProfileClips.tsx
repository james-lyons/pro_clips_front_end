import React from 'react';
import { connect } from 'react-redux';
import ProfileClipsComponent from '../../../components/Profile/ProfileClips/ProfileClipsComp';
import { State, Props } from './config';
import { fetchUserClips } from '../../../redux/actions/clipActions/clipActions';

class ProfileClips extends React.PureComponent<Props, State> {
    state: State = {
        userClips: null,
        newTitle: '',
        game: ''
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

    private handleChange = (event: any) => {        
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
                    <ProfileClipsComponent
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

const mapStateToProps = (state: any) => {
    return {
        user: state.userReducer.user,
        userClips: state.clipReducer.userClips
    };
};

export default connect(mapStateToProps, { fetchUserClips })(ProfileClips);

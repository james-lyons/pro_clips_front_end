import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { State, Props, ReduxState } from './config';
import { fetchFollowers } from '../../../redux/actions/followActions/followActions';
import FollowersListComp from '../../../components/FollowLists/FollowersList/FollowersListComp';

class FollowersList extends React.PureComponent<Props & RouteComponentProps, State> {

    state: State = {
        user: null
    };

    componentDidMount = async () => {
        const { match, user, currentUser } = this.props;

        if (match.params.username === currentUser.username) {
            await this.setState({ user: currentUser })

        } else {
            await this.setState({ user });
        };
    };

    private handleShowFollowers = async () => {
        const { fetchFollowers } = this.props;
        const { username } = this.state.user;

        await fetchFollowers(username);        
    };

    render() {
        const { user } = this.state;
        const { handleShowFollowers } = this;
        return (
            <>
                {
                    user && 
                    <FollowersListComp
                        handleShowFollowers={ handleShowFollowers }
                    />
                }
            </>
        );
    };
};

const mapStateToProps = (state: ReduxState) => {
    return {
        user: state.userReducer.user,
        currentUser: state.userReducer.currentUser
    };
};

export default connect(mapStateToProps, { fetchFollowers })(withRouter(FollowersList));

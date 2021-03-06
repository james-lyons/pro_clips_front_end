import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { State, Props, ReduxState } from './config';
import { fetchFollowingList } from '../../../redux/actions/followActions/followActions';
import FollowingListComp from '../../../components/FollowLists/FollowingList/FollowingListComp';

class FollowingList extends React.PureComponent<Props & RouteComponentProps, State> {

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

    private handleShowFollowing = async () => {
        const { fetchFollowingList } = this.props;
        const { username } = this.state.user;

        await fetchFollowingList(username);        
    };

    render() {
        const { user } = this.state;
        const { handleShowFollowing } = this;
        return (
            <>
                {
                    user && 
                    <FollowingListComp
                        user={ user }
                        handleShowFollowing={ handleShowFollowing }
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

export default connect(mapStateToProps, { fetchFollowingList })(withRouter(FollowingList));

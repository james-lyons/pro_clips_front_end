import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { State, Props, ReduxState } from './config';
import { fetchFollowers } from '../../../redux/actions/followActions/followActions';
import FollowersListComp from '../../../components/FollowLists/FollowersList/FollowersListComp';

class FollowersList extends React.PureComponent<Props & RouteComponentProps, State> {

    state: State = {
        user: null,
        showFollowers: false,
    };

    componentDidMount = async () => {
        const { match, user, currentUser } = this.props;

        if (match.params.username === currentUser.userName) {
            await this.setState({ user: currentUser })

        } else {
            await this.setState({ user });
        };
    };

    private handleShowFollowers = async () => {
        const { fetchFollowers } = this.props;
        const { userName } = this.state.user;

        await fetchFollowers(userName);        
        this.setState({ showFollowers: true });
    };

    private handleCloseFollowers = () => {
        this.setState({ showFollowers: false });
    };

    render() {
        const { showFollowers } = this.state;
        const { user } = this.state;
        const { handleShowFollowers, handleCloseFollowers } = this;
        return (
            <>
                {
                    user && 
                    <FollowersListComp
                        user={ user }
                        showFollowers={ showFollowers }
                        handleShowFollowers={ handleShowFollowers }
                        handleCloseFollowers={ handleCloseFollowers }
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

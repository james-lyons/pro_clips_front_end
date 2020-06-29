import React from 'react';
import { connect } from 'react-redux';
import { Modal, Item } from 'semantic-ui-react';
import { Props, ReduxState, Follower } from './config';

const FollowersListComp: React.SFC<Props> = ({
    user,
    followersList,
    handleShowFollowers
}) => {
    const { followers } = user;

    const followersMapper = (followersList: Array<Follower>) => {
        const followerArray = followersList.map((follower) =>

            <Item key={ follower.username }>
                <Item.Image
                    avatar
                    size='mini'
                    id='follower-list-img'
                    src={ follower.profile_image }
                />
                <Item.Content
                    as='a'
                    href={ `/${ follower.username }` }
                    verticalAlign='middle'
                    className='follow-list-a'
                >
                    { follower.username }
                </Item.Content>
            </Item>

        );
        return followerArray;
    };

    return (
        <>
            <Modal
                size='mini'
                id='follower-modal'
                centered={ false }
                onMount={ handleShowFollowers }
                trigger={ <span>{ user.followers.length } Followers</span> }
            >
                <Modal.Header>Followers</Modal.Header>
                <Modal.Content>
                    <Item.Group divided>
                        { followersList && followersMapper(followersList) }
                    </Item.Group>
                </Modal.Content>
            </Modal>
        </>
    );
};

const mapStateToProps = (state: ReduxState) => {
    return {
        followersList: state.followerReducer.followersList,
        user: state.userReducer.user
    };
};

export default connect(mapStateToProps, null)(FollowersListComp);

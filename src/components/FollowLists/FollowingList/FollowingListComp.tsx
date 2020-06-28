import React from 'react';
import { connect } from 'react-redux';
import { Modal, Item } from 'semantic-ui-react';
import { Props, ReduxState, Follower } from './config';

const FollowingListComp: React.SFC<Props> = ({
    user,
    followingList,
    handleShowFollowing
}) => {
    const { following } = user;

    const followersMapper = (followersList: Array<Follower>) => {
        const followerArray = followersList.map((follower) => 

            <Item key={ follower.userName }>
                <Item.Image
                    avatar
                    size='mini'
                    id='following-list-img'
                    src={ follower.profile_image }
                />
                <Item.Content
                    as='a'
                    verticalAlign='middle'
                    className='follow-list-a'
                >
                    { follower.userName }
                </Item.Content>
            </Item>

        );
        return followerArray;
    };

    return (
        <>
            <Modal
                size='mini'
                id='following-modal'
                centered={ false }
                onMount={ handleShowFollowing }
                trigger={ <span>{ following.length } Following</span> }
            >
                <Modal.Header>Following</Modal.Header>
                <Modal.Content>
                    <Item.Group divided>
                        { followingList && followersMapper(followingList) }
                    </Item.Group>
                </Modal.Content>
            </Modal>
        </>
    );
};

const mapStateToProps = (state: ReduxState) => {
    return {
        followingList: state.followerReducer.followingList
    };
};

export default connect(mapStateToProps, null)(FollowingListComp);

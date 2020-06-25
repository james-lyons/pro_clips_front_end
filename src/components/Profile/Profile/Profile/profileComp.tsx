import React from 'react';
import { connect } from 'react-redux';
import { Card, Container, Grid, Image, Menu } from 'semantic-ui-react';
import { Props, styles, ReduxState } from './config';
import LoginModal from '../../../LoginModal/LoginModal';
import FollowButton from '../FollowButton/FollowButton';
import EditProfileButton from '../EditProfileButton/EditProfileButton';
import FollowingList from '../../../../containers/FollowLists/FollowingList/FollowingList';
import FollowersList from '../../../../containers/FollowLists/FollowerList/FollowersList';

const ProfileComp: React.SFC<Props> = ({
    user,
    isMatch,
    isFollowed,
    buttonName,
    showLoginModal,
    followUser,
    unfollowUser,
    handleShowLoginModal,
    handleCloseLoginModal
}) => {

    const { userName, profile_image, clips, bio } = user;
 
    return (
        <>
            <Container text style={{ margin: '3rem 0', paddingBottom: '4rem', borderBottom: '1px solid grey' }}>
                <Grid>
                    <Grid.Column width={ 4 } centered>
                        <Image centered src={ user.profile_image } style={{ width: '75%', borderRadius: '100%' }}/>
                    </Grid.Column>

                    <Grid.Column width={ 11 } floated='right'>
                        <Grid.Row>
                            <h1 style={ styles.h1 }>{ userName }</h1>
                            {
                                isMatch
                                ? <EditProfileButton />
                                : <FollowButton
                                    buttonName={ buttonName }
                                    userName={ userName }
                                    isFollowed={ isFollowed }
                                    followUser={ followUser }
                                    unfollowUser={ unfollowUser }
                                    handleShowLoginModal={ handleShowLoginModal }
                                />
                            }
                        </Grid.Row>
                        
                        <Grid.Row>
                            <Menu secondary>
                                <Menu.Item name={`${ clips.length } clips`} />
                                <Menu.Item color='red'><FollowersList /></Menu.Item>
                                <Menu.Item color='black'><FollowingList /></Menu.Item>
                            </Menu>
                        </Grid.Row>

                        <Grid.Row style={{ paddingLeft: '.9rem', paddingTop: '.5rem' }}>
                            <Container>
                                <p style={{ fontSize: '1.5rem' }}>{ bio }</p>
                            </Container>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </Container>
        </>
    );
};

const mapStateToProps = (state: ReduxState) => {
    return {
        followersList: state.followerReducer.followersList,
        followingList: state.followerReducer.followingList
    };
};

export default connect(mapStateToProps, null)(ProfileComp);

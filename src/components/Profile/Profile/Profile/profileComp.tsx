import React from 'react';
import { connect } from 'react-redux';
import { Props, ReduxState } from './config';
import { Container, Grid, Image, Menu, Responsive } from 'semantic-ui-react';
import FollowButton from '../FollowButton/FollowButton';
import EditProfileButton from '../EditProfileButton/EditProfileButton';
import FollowersList from '../../../../containers/FollowLists/FollowerList/FollowersList';
import FollowingList from '../../../../containers/FollowLists/FollowingList/FollowingList';

const ProfileComp: React.SFC<Props> = ({
    user,
    isMatch,
    isFollowed,
    followUser,
    unfollowUser
}) => {

    const { userName, profile_image, clips, bio } = user;
 
    return (
        <>
            <Container text id='profile-container'>
                <Grid>
                    <Grid.Column width={ 4 } centered='true'>
                        <Image centered src={ profile_image } id='profile-image'/>
                    </Grid.Column>

                    <Grid.Column width={ 11 }>
                        <Grid.Row id='profile-row-1'>
                            <h1 id='profile-name-h1'>{ userName }</h1>
                            {
                                isMatch
                                ? <EditProfileButton />
                                : <FollowButton
                                    userName={ userName }
                                    isFollowed={ isFollowed }
                                    followUser={ followUser }
                                    unfollowUser={ unfollowUser }
                                />
                            }
                        </Grid.Row>
                        
                        <Grid.Row>
                            <Menu secondary>
                                <Menu.Item name={`${ clips.length } clips`}
                                    className='profile-menu-item'
                                />

                                <Menu.Item color='red'
                                    className='profile-menu-item'
                                >
                                    <FollowersList />
                                </Menu.Item>

                                <Menu.Item color='black'
                                    className='profile-menu-item'
                                >
                                    <FollowingList /
                                ></Menu.Item>
                            </Menu>
                        </Grid.Row>

                        <Responsive minWidth={ 650 }
                            id='profile-row-2'
                            className='profile-responsive-bio-row'
                        >
                            <Grid.Row className='profile-bio-grid-row'>
                                <Container>
                                    <p className='profile-bio-p'>{ bio }</p>
                                </Container>
                            </Grid.Row>
                        </Responsive>
                    </Grid.Column>

                    <Responsive maxWidth={ 649 }
                        className='profile-responsive-bio-row'
                    >
                        <Grid.Row className='profile-bio-grid-row'>
                            <Container>
                                <p className='profile-bio-p'>{ bio }</p>
                            </Container>
                        </Grid.Row>
                    </Responsive>

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

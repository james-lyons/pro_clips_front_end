import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Image, Menu, Responsive, Segment } from 'semantic-ui-react';
import { Props, styles, ReduxState } from './config';
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
            <Container text style={{ margin: '2rem 0', paddingBottom: '2rem', borderBottom: '1px solid grey' }}>
                <Grid>
                    <Grid.Column width={ 4 } centered>
                        <Image centered src={ user.profile_image } style={{ width: '75%', borderRadius: '100%' }}/>
                    </Grid.Column>

                    <Grid.Column width={ 11 }>
                        <Grid.Row>
                            <h1 style={ styles.h1 }>{ userName }</h1>
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
                                <Menu.Item name={`${ clips.length } clips`} style={{ margin: 0, padding: '10px' }}/>
                                <Menu.Item color='red' style={{ margin: 0, padding: '10px' }}><FollowersList /></Menu.Item>
                                <Menu.Item color='black' style={{ margin: 0, padding: '10px' }}><FollowingList /></Menu.Item>
                            </Menu>
                        </Grid.Row>
                        <Responsive as={ Segment } minWidth={ 600 } style={{ padding: 0, border: 'none', margin: 0, boxShadow: 'none' }}>
                            <Grid.Row style={{ padding: '.25rem' }}>
                                <Container>
                                    <p style={{ fontSize: '1.2rem' }}>{ bio }</p>
                                </Container>
                            </Grid.Row>
                        </Responsive>
                    </Grid.Column>
                    <Responsive as={ Segment } maxWidth={ 599 } style={{ padding: 0, border: 'none', margin: 0, boxShadow: 'none' }}>
                        <Grid.Row style={{ padding: '.25rem' }}>
                            <Container>
                                <p style={{ fontSize: '1.2rem', padding: '0 .8rem' }}>{ bio }</p>
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

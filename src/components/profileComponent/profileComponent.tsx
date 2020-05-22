import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Props, styles } from './config';
import { followUser, unfollowUser } from '../../redux/actions/followActions/followActions';

const EditProfileButton: React.SFC = ({}) => {
    return (
        <Link to="/accounts" style={{ marginLeft: '4rem' }}>
            <button style={{ borderRadius: '4px' }}>
                Edit Profile
            </button>
        </Link>
    );
};

const FollowButton: React.SFC = ({ userName }) => {
    if (userName)
    return (
        <button style={{ marginLeft: '4rem', borderRadius: '4px' }} onClick={ followUser(userName) }>Follow</button>
    );
};

const ProfileComponent: React.SFC<Props> = ({
    user,
    match
}) => {

    const { userName, profile_image, posts, followers, following, bio } = user;
 
    return (
        <>
            <div>
                <header className="col-lg-6 col-md-10 col-sm-12 mb-4" style={ styles.headerWrapper }>
                    <div style={{ height: '100%' }}>
                        <img src={ profile_image } style={{ height: '7rem', borderRadius: '100%' }}/>
                        
                    </div>
                    <section style={{ height: '100%' }}>
                        <div style={{ justifyContent: 'center' }}>
                            <h1 style={ styles.h1 }>{ userName }</h1>
                            { match ? <EditProfileButton /> : <FollowButton userName={ userName } currentUserName={ }/> }
                            <button style={{ marginLeft: '4rem', borderRadius: '4px' }} onClick={ unfollowUser(userName) }>Follow</button>

                        </div>
                        <ul style={ styles.ulWrapper }>
                            <li style={ styles.li }><span>{ posts.length } posts</span></li>
                            <li style={ styles.li }><a>{ followers.length } followers</a></li>
                            <li style={ styles.li }><a>{ following.length } following</a></li>
                        </ul>
                        <div>
                            <h1 style={ styles.h1 }>{ bio }</h1>
                        </div>
                    </section>
                </header>
            </div>
        </>
    );
};

const mapStateToProps = (state:any) => {
    return {
        currentUser: state.userReducer.currentUser,
        user: state.userReducer.user
    };
};

export default connect(mapStateToProps, { followUser, unfollowUser })(ProfileComponent);

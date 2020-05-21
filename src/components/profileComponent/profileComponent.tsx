import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Props, styles } from './config';

const EditProfileButton: React.SFC = ({}) => {
    return (
        <Link to="/accounts" style={{ marginLeft: '4rem' }}>
            <button style={{ borderRadius: '4px' }}>
                Edit Profile
            </button>
        </Link>
    );
};

const FollowButton: React.SFC = ({}) => {
    return (
        <button style={{ marginLeft: '4rem', borderRadius: '4px' }} onClick={() => console.log('hello') }>Follow</button>
    );
};


const ProfileComponent: React.SFC<Props> = ({
    user,
    currentUser
}) => {

    return (
        <>
            <div>
                <header className="col-lg-6 col-md-10 col-sm-12 mb-4" style={ styles.headerWrapper }>
                    <div style={{ height: '100%' }}>
                        <button style={{ height: '7rem', width: '7rem', borderRadius: '100%', padding: '0' }} onClick={() => console.log(user)}>
                            <img src={ user.profile_image } style={{ height: '7rem', borderRadius: '100%' }}/>
                        </button>
                    </div>
                    <section style={{ height: '100%' }}>
                        <div style={{ justifyContent: 'center' }}>
                            <h1 style={ styles.h1 }>{ user.userName }</h1>
                            { currentUser.id ? <EditProfileButton /> : <FollowButton /> }
                        </div>
                        <ul style={ styles.ulWrapper }>
                            <li style={ styles.li }><span>{ user.posts.length } posts</span></li>
                            <li style={ styles.li }><a>{ user.followers.length } followers</a></li>
                            <li style={ styles.li }><a>{ user.following.length } following</a></li>
                        </ul>
                        <div>
                            <h1 style={ styles.h1 }>{ user.bio }</h1>
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

export default connect(mapStateToProps, null)(ProfileComponent);

import React from 'react';
import { connect } from 'react-redux';
import { Props, styles } from './profile.config';
import { Redirect } from 'react-router-dom';

const ProfileComponent: React.SFC<Props> = ({
    user
}) => {

    return (
        <>
            <div>
                <header className="col-lg-6 col-md-10 col-sm-12 mb-4" style={ styles.headerWrapper }>
                    <div style={{ height: '100%' }}>
                        <button style={{ height: '7rem', width: '7rem', borderRadius: '100%', padding: '0' }}>
                            <img src={ user.profile_image } style={{ height: '7rem', borderRadius: '100%' }}/>
                        </button>
                    </div>
                    <section style={{ height: '100%' }}>
                        <div style={{ justifyContent: 'center' }}>
                            <h1 style={ styles.h1 }>{ user.userName }</h1>
                            <a style={{ marginLeft: '2rem' }} href="/accounts">
                                <button style={{ borderRadius: '4px' }}>
                                    Edit Profile
                                </button>
                            </a>
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
        user: state.userReducer.user
    };
};

export default connect(mapStateToProps, null)(ProfileComponent);

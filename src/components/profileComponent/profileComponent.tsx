import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Props, styles } from './config';

const ProfileComponent: React.SFC<Props> = ({
    currentUser
}) => {

    return (
        <>
            <div>
                <header className="col-lg-6 col-md-10 col-sm-12 mb-4" style={ styles.headerWrapper }>
                    <div style={{ height: '100%' }}>
                        <button style={{ height: '7rem', width: '7rem', borderRadius: '100%', padding: '0' }}>
                            <img src={ currentUser.profile_image } style={{ height: '7rem', borderRadius: '100%' }}/>
                        </button>
                    </div>
                    <section style={{ height: '100%' }}>
                        <div style={{ justifyContent: 'center' }}>
                            <h1 style={ styles.h1 }>{ currentUser.userName }</h1>
                            <Link to="/accounts" style={{ marginLeft: '4rem' }}>
                                <button style={{ borderRadius: '4px' }}>
                                    Edit Profile
                                </button>
                            </Link>
                        </div>
                        <ul style={ styles.ulWrapper }>
                            <li style={ styles.li }><span>{ currentUser.posts.length } posts</span></li>
                            <li style={ styles.li }><a>{ currentUser.followers.length } followers</a></li>
                            <li style={ styles.li }><a>{ currentUser.following.length } following</a></li>
                        </ul>
                        <div>
                            <h1 style={ styles.h1 }>{ currentUser.bio }</h1>
                        </div>
                    </section>
                </header>
            </div>
        </>
    );
};

const mapStateToProps = (state:any) => {
    return {
        currentUser: state.userReducer.currentUser
    };
};

export default connect(mapStateToProps, null)(ProfileComponent);

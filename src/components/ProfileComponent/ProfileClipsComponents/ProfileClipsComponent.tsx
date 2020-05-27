import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Props, styles } from './config';

const ProfileComponent: React.SFC<{}> = ({ user, clip }) => {

    const { userName, profile_image, clips, followers, following, bio } = user;
 
    return (
        <>
            <div>
                <div style={{ margin: '0 auto', textAlign: 'center' }}>
                    <p>{ clip.filename }</p>
                    <video id="video" width="430" height="270" src="https://s3-us-west-1.amazonaws.com/pro.clips/Screen+Recording+2020-05-22+at+6.19.39+PM.mov" controls />
                </div>
            </div>
        </>
    );
};

export default ProfileComponent;

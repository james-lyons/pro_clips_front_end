import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Props, styles } from './config';

const ProfileComponent: React.SFC<{}> = ({ user, userClips }) => {

    const { userName, profile_image, clips, followers, following, bio } = user;

    const clipMapper = () => {
        const clipArr = userClips.map((clip) =>
            <div
                key={ clip._id }
                style={{ display: 'inline-block', margin: '.5rem' }}
            >
                <video width={ 300 } height={ 190 } src={ clip.url } controls/>
                <h1 style={{ fontSize: '1.3rem' }}>{ clip.title }</h1>
            </div>
        )
        return clipArr
    }
 
    return (
        <>
            {/* <div> */}
                <div style={{ margin: '0 auto', textAlign: 'center' }}>
                    { userClips && clipMapper(userClips) }
                </div>
            {/* </div> */}
        </>
    );
};

export default ProfileComponent;

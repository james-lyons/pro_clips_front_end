import React from 'react';
import { connect } from 'react-redux';
import { Card, Dropdown, Accordion } from 'react-bootstrap';
// import { Props, styles } from './config';

const ProfileComponent: React.SFC<{}> = ({ user, userClips, handleClipEdit, handleClipDelete }) => {

    const { userName, profile_image, clips, followers, following, bio } = user;

    const clipMapper = (userClips: Array<object>) => {
        const clipArr = userClips.map((clip) =>
            <div key={ clip._id } style={{ display: 'inline-block', margin: '.5 rem' }}>
                <a href={ `/clip/${ clip._id }` } style={{ textDecoration: 'none', color: 'black' }}>
                    <Card
                        style={{ display: 'inline-block', margin: '.5rem' }}
                    >
                        <video width={ 300 } height={ 190 } src={ clip.url } controls/>
                        <h1 style={{ fontSize: '1.3rem' }}>{ clip.title }</h1>
                    </Card>
                </a>
            </div>
        )
        return clipArr;
    };
 
    return (
        <>
            <div style={{ margin: '0 auto', textAlign: 'center' }}>
                { userClips && clipMapper(userClips) }
            </div>
        </>
    );
};

export default ProfileComponent;

import React from 'react';
import { Props, ClipSettingsProps, UserClipSettingsProps } from './config';
import { Card, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// const { userName, profile_image, clips, followers, following, bio } = user;
const element = <FontAwesomeIcon icon={ faBars } />

const UserClipSettings: React.SFC<UserClipSettingsProps> = ({ clip, handleClipEdit, handleClipDelete }) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '91.9% 8.1%' }}>
            <h1 style={{ fontSize: '1.3rem' }}>{ clip.title }</h1>
            <Dropdown>
                <Dropdown.Toggle>
                    { element }
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={ () => handleClipEdit(clip._id) }>Edit</Dropdown.Item>
                    <Dropdown.Item onClick={ () => handleClipDelete(clip._id) }>Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

const ClipSettings: React.SFC<ClipSettingsProps> = ({ clip }) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '91.9% 8.1%' }}>
            <h1 style={{ fontSize: '1.3rem' }}>{ clip.title }</h1>
            <Dropdown>
                <Dropdown.Toggle>
                    { element }
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={ () => console.log('report') }>Report</Dropdown.Item>
                    <Dropdown.Item onClick={ () => console.log('report') }>Copy Link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

const ClipPageComponent: React.SFC<Props> = ({ clip, handleClipEdit, handleClipDelete }) => {
    const currentUser = localStorage.getItem('uid');

    return (
        <Card
            key={ clip._id }
            style={{ maxWidth: '48.5vw', margin: '3rem auto' }}
        >
            <video width={ 650 } height={ 410 } src={ clip.url } controls/>
            {
                currentUser === clip.poster
                && <UserClipSettings
                    clip={ clip }
                    handleClipEdit={ handleClipEdit }
                    handleClipDelete={ handleClipDelete }
                />
                || <ClipSettings clip={ clip } />
            }
        </Card>
    );
};

export default ClipPageComponent;
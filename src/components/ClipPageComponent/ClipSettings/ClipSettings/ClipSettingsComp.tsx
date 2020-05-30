import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { ClipSettingsProps } from './config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={ faBars } />


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

export default ClipSettings;
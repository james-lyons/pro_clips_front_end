import React from 'react';
import { Props } from './config';
import { Dropdown } from 'semantic-ui-react';
import ReportClip from '../../../../containers/Report/Clip/ReportClip';

const ClipActions: React.SFC<Props> = ({
    clip,
    handleFormVis,
    handleClipDelete
}) => {

    const userId = localStorage.getItem('uid');

    const userActions = () => {
        return (
            <>
                {
                    userId &&
                    <Dropdown
                        basic
                        floating
                        size='tiny'
                        direction='left'
                        icon='ellipsis vertical'
                        className='icon'
                    >
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <ReportClip
                                    offender={ clip.poster }
                                    reporter={ userId }
                                    clip_id={ clip._id }
                                />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                }
            </>
        );
    };

    const posterActions = () => {
        return (
            <Dropdown
                basic
                floating
                size='tiny'
                direction='left'
                icon='ellipsis vertical'
                className='icon'
            >
                <Dropdown.Menu>
                    <Dropdown.Item
                        icon='edit'
                        text='Edit'
                        onClick={ () => handleFormVis() }
                    />
                    <Dropdown.Item
                        icon='delete'
                        text='Delete'
                        onClick={ () => handleClipDelete(clip._id) }
                    />
                </Dropdown.Menu>
            </Dropdown>
        );
    };

    return (
        <>
            { userId === clip.poster ? posterActions() : userActions() }
        </>
    );
};

export default ClipActions;

import React from 'react';
import { Props, Clip } from './config';
import { Link } from 'react-router-dom';
import { Card, Responsive } from 'semantic-ui-react';

const ProfileComp: React.SFC<Props> = ({ game, userClips, handleChange }) => {

    const clipMapper = (userClips: Array<Clip>) => {
        const clipArr = userClips.map((clip) =>
            {
                if (game === '') {
                    return (
                        <React.Fragment key={ clip._id }>
                            <Card
                                as={ Link }
                                to={ `/clip/${ clip._id }` }
                                className='profile-clips-card'
                            >
                                <video
                                    width='100%'
                                    src={ clip.url }
                                    controls
                                />
                                <Card.Description
                                    textAlign='left'
                                    className='profile-clips-card-description'
                                >
                                    { clip.game }
                                </Card.Description>
                            </Card>
                        </React.Fragment>
                    )
                } else if (game === clip.game) {
                    return (
                        <React.Fragment key={ clip._id }>
                            <Card
                                as={ Link }
                                to={ `/clip/${ clip._id }` }
                                className='profile-clips-card'
                            >
                                <video
                                    width='100%'
                                    src={ clip.url }
                                    controls
                                />
                                <Card.Description
                                    textAlign='left'
                                    className='profile-clips-card-description'
                                >
                                    { clip.game }
                                </Card.Description>
                            </Card>
                        </React.Fragment>
                    );
                };
            }
        );
        return clipArr;
    };
 
    return (
        <>
            <div id='profile-clips-game-select'>
                <form id='profile-clips-form'>
                    <select onChange={ handleChange }>
                        <option value="">All clips</option>
                        <option value="Apex Legends">Apex Legends</option>
                        <option value="League of Legends">League of Legends</option>
                        <option value="C.O.D. Warzone">C.O.D. Warzone</option>
                        <option value="Valorant">Valorant</option>
                        <option value="Crucible">Crucible</option>
                        <option value="C.S.G.O">C.S.G.O</option>
                        <option value="Escape from Tarkov">Escape from Tarkov</option>
                        <option value="World of Warcraft">World of Warcraft</option>
                        <option value="G.T.A. V">G.T.A. V</option>
                        <option value="Hearthstone">Hearthstone</option>
                        <option value="Gwent">Gwent</option>
                        <option value="Dota 2">Dota 2</option>
                        <option value="Terreria">Terreria</option>
                        <option value="Minecraft">Minecraft</option>
                        <option value="Overwatch">Overwatch</option>
                        <option value="Teamfight Tacticts">Teamfight Tacticts</option>
                        <option value="Rainbow 6 Seige">Rainbow 6 Seige</option>
                        <option value="PUB G">PUB G</option>
                        <option value="Smite">Smite</option>
                        <option value="Fortnite">Fortnite</option>
                    </select>
                </form>
                
                <Responsive minWidth={ 1100 }>
                    <Card.Group
                        stackable itemsPerRow={ 3 }
                        className='profile-clips-card-group'
                    >
                        { userClips && clipMapper(userClips) }
                    </Card.Group>
                </Responsive>

                <Responsive minWidth={ 650 } maxWidth={ 1099 }>
                    <Card.Group
                        stackable itemsPerRow={ 3 }
                        className='profile-clips-card-group'
                    >
                        { userClips && clipMapper(userClips) }
                    </Card.Group>
                </Responsive>

                <Responsive maxWidth={ 649 }>
                    <Card.Group
                        stackable itemsPerRow={ 3 }
                        className='profile-clips-card-group'
                    >
                        { userClips && clipMapper(userClips) }
                    </Card.Group>
                </Responsive>

            </div>
        </>
    );
};

export default ProfileComp;

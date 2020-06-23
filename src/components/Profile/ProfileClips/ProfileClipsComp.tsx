import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Props, Clip } from './config';

const ProfileComp: React.SFC<Props> = ({ game, userClips, handleChange }) => {

    const clipMapper = (userClips: Array<Clip>) => {
        const clipArr = userClips.map((clip) =>
            {
                if (game === '') {
                    return (
                        <div
                            key={ clip._id }
                            style={{ display: 'inline-block', margin: '.5 rem' }}
                        >
                            <Link
                                to={ `/clip/${ clip._id }` }
                                style={{ textDecoration: 'none', color: 'black' }}
                            >
                                <Card
                                    style={{ display: 'inline-block', margin: '.5rem' }}
                                >
                                    <video
                                        width={ 300 }
                                        height={ 190 }
                                        src={ clip.url }
                                        controls
                                    />
                                    <h1 style={{ fontSize: '1.3rem' }}>
                                        { clip.game }
                                    </h1>
                                    <h1 style={{ fontSize: '1.3rem' }}>
                                        { clip.title }
                                    </h1>
                                </Card>
                            </Link>
                        </div>
                    )
                } else if (game === clip.game) {
                    return (
                        <div
                            key={ clip._id }
                            style={{ display: 'inline-block', margin: '.5 rem' }}
                        >
                            <Link
                                to={ `/clip/${ clip._id }` }
                                style={{ textDecoration: 'none', color: 'black' }}
                            >
                                <Card
                                    style={{ display: 'inline-block', margin: '.5rem' }}
                                >
                                    <video
                                        width={ 300 }
                                        height={ 190 }
                                        src={ clip.url }
                                        controls
                                    />
                                    <h1 style={{ fontSize: '1.3rem' }}>
                                        { clip.game }
                                    </h1>
                                    <h1 style={{ fontSize: '1.3rem' }}>
                                        { clip.title }
                                    </h1>
                                </Card>
                            </Link>
                        </div>
                    );
                };
            }
        );
        return clipArr;
    };
 
    return (
        <>
            <div style={{ margin: '0 auto', textAlign: 'center' }}>
                <form style={{ marginBottom: '2rem' }}>
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
                { userClips && clipMapper(userClips) }
            </div>
        </>
    );
};

export default ProfileComp;

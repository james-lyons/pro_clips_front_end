import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Props, Clip } from './config';

const GameClipsComp: React.SFC<Props> = ({ gameClips }) => {

    const clipMapper = (gameClips: Array<Clip>) => {
        const clipArr = gameClips.map((clip) =>
            <div key={ clip._id } style={{ display: 'inline-block', margin: '.5 rem' }}>
                    <Card
                        style={{ display: 'inline-block', margin: '.5rem' }}
                    >
                        <Link to={ `/clip/${ clip._id }` } style={{ textDecoration: 'none', color: 'black' }}>
                            <video width={ 300 } height={ 190 } src={ clip.url } controls/>
                        </Link>
                        <Link to={ `/${ clip.poster_name }`}>
                            <h1 style={{ fontSize: '1.3rem' }}>{ clip.poster_name } </h1>
                        </Link>
                        <h1 style={{ fontSize: '1.3rem' }}>{ clip.title } </h1>
                    </Card>
            </div>
        );
        return clipArr;
    };
    
    return (
        <>
            { gameClips && clipMapper(gameClips) }
        </>
    );
};

const mapStateToProps = (state: any) => {
    return {
        gameClips: state.clipReducer.gameClips
    };
};

export default connect(mapStateToProps, null)(GameClipsComp);
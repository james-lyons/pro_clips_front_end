import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Clips {
    clip: null | Clip
};

interface Clip {
    _id: string,
    poster: string,
    title: string,
    game: string,
    url: string
};

const clipMapper = (clips: Clip) => {
    const clipArr = clips.map((clip) =>
        <div key={ clip._id } style={{ display: 'inline-block', margin: '.5 rem' }}>
            <Link to={ `/clip/${ clip._id }` } style={{ textDecoration: 'none', color: 'black' }}>
                <Card
                    style={{ display: 'inline-block', margin: '.5rem' }}
                >
                    <video width={ 300 } height={ 190 } src={ clip.url } controls/>
                    <h1 style={{ fontSize: '1.3rem' }}>{ clip.title } { clip.game }</h1>
                </Card>
            </Link>
        </div>
    )
    return clipArr;
};

const BrowseClipsComponent: React.SFC<{ browseClips: Array<object> }> = ({
    browseClips
}) => {
    return (
        <>
            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '20% 20% 20% 20% 20%' }}>
                <img
                    style={{ maxWidth: '148px', height: '197px' }}
                    className="d-block w-100"
                    src="https://static-cdn.jtvnw.net/ttv-boxart/VALORANT-285x380.jpg"
                    alt="First slide"
                />
                <img
                    style={{ maxWidth: '148px', height: '197px' }}
                    className="d-block w-100"
                    src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg"
                    alt="Second slide"
                />
                <img
                    style={{ maxWidth: '148px', height: '197px' }}
                    className="d-block w-100"
                    src="https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-285x380.jpg"
                    alt="Third slide"
                />
                <img
                    style={{ maxWidth: '148px', height: '197px' }}
                    className="d-block w-100"
                    src="https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg"
                    alt="First slide"
                />
                <img
                    style={{ maxWidth: '148px', height: '197px' }}
                    className="d-block w-100"
                    src="https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-285x380.jpg"
                    alt="Second slide"
                />
            </div>
            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '20% 20% 20% 20% 20%' }}>
                <img
                    style={{ maxWidth: '148px', height: '197px' }}
                    className="d-block w-100"
                    src="https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V-285x380.jpg"
                    alt="Third slide"
                />
                <img
                    style={{ maxWidth: '148px', height: '197px' }}
                    className="d-block w-100"
                    src="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-285x380.jpg"
                    alt="First slide"
                />
                <img
                    style={{ maxWidth: '148px', height: '197px' }}
                    className="d-block w-100"
                    src="https://static-cdn.jtvnw.net/ttv-boxart/Escape%20From%20Tarkov-285x380.jpg"
                    alt="Second slide"
                />
                <img
                    style={{ maxWidth: '148px', height: '197px' }}
                    className="d-block w-100"
                    src="https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Modern%20Warfare-285x380.jpg"
                    alt="Third slide"
                />
                <img
                    style={{ maxWidth: '148px', height: '197px' }}
                    className="d-block w-100"
                    src="https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-285x380.jpg"
                    alt="First slide"
                />
            </div>

            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '20% 20% 20% 20% 20%' }}>
                <img
                    style={{ maxWidth: '148px', height: '197px' }}
                    className="d-block w-100"
                    src="https://static-cdn.jtvnw.net/ttv-boxart/Teamfight%20Tactics-285x380.jpg"
                    alt="Second slide"
                />
                <img
                    style={{ maxWidth: '148px', height: '197px' }}
                    className="d-block w-100"
                    src="https://static-cdn.jtvnw.net/ttv-boxart/Sea%20of%20Thieves-285x380.jpg"
                    alt="Third slide"
                />
                <img
                    style={{ maxWidth: '148px', height: '197px' }}
                    className="d-block w-100"
                    src="https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-285x380.jpg"
                    alt="First slide"
                />
                <img
                    style={{ maxWidth: '148px', height: '197px' }}
                    className="d-block w-100"
                    src="https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-285x380.jpg"
                    alt="Second slide"
                />
                <img
                    style={{ maxWidth: '148px', height: '197px' }}
                    className="d-block w-100"
                    src="https://static-cdn.jtvnw.net/ttv-boxart/Animal%20Crossing:%20New%20Horizons-285x380.jpg"
                    alt="Third slide"
                />
            </div>

        </>
    );
};

const mapStateToProps = (state: any) => {
    return {
        browseClips: state.clipReducer.browseClips
    };
};

export default connect(mapStateToProps, null)(BrowseClipsComponent);
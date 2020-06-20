import React from 'react';
import { Link } from 'react-router-dom';

const BrowseClipsComponent: React.SFC <{}> = ({}) => {
    return (
        <>
            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '20% 20% 20% 20% 20%' }}>
                <Link to={`/browseclips/Valorant`}>
                    <img
                        style={{ maxWidth: '148px', height: '197px' }}
                        className="d-block w-100"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/VALORANT-285x380.jpg"
                        alt="First slide"
                    />
                </Link>
                <Link to={`/browseclips/League%20of%20Legends`}>
                    <img
                        style={{ maxWidth: '148px', height: '197px' }}
                        className="d-block w-100"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg"
                        alt="Second slide"
                    />
                </Link>
                <Link to={`/browseclips/Dota%202`}>
                    <img
                        style={{ maxWidth: '148px', height: '197px' }}
                        className="d-block w-100"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-285x380.jpg"
                        alt="Third slide"
                    />
                </Link>
                <Link to={`/browseclips/Fortnite`}>
                    <img
                        style={{ maxWidth: '148px', height: '197px' }}
                        className="d-block w-100"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg"
                        alt="First slide"
                    />
                </Link>
                <Link to={`/browseclips/Apex%20Legends`}>
                    <img
                        style={{ maxWidth: '148px', height: '197px' }}
                        className="d-block w-100"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-285x380.jpg"
                        alt="Second slide"
                    />
                </Link>
            </div>
            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '20% 20% 20% 20% 20%' }}>
                <Link to={`/browseclips/Grand%20Theft%20Auto%20V`}>
                    <img
                        style={{ maxWidth: '148px', height: '197px' }}
                        className="d-block w-100"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V-285x380.jpg"
                        alt="Third slide"
                    />
                </Link>
                <Link to={`/browseclips/Counter-Strike:%20Global%20Offensive`}>
                    <img
                        style={{ maxWidth: '148px', height: '197px' }}
                        className="d-block w-100"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-285x380.jpg"
                        alt="First slide"
                    />
                </Link>
                <Link to={`/browseclips/Escape%20From%20Tarkov`}>
                    <img
                        style={{ maxWidth: '148px', height: '197px' }}
                        className="d-block w-100"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Escape%20From%20Tarkov-285x380.jpg"
                        alt="Second slide"
                    />
                </Link>
                <Link to={`/browseclips/Call%20of%20Duty:%20Modern%20Warfare`}>
                    <img
                        style={{ maxWidth: '148px', height: '197px' }}
                        className="d-block w-100"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Modern%20Warfare-285x380.jpg"
                        alt="Third slide"
                    />
                </Link>
                <Link to={`/browseclips/Hearthstone`}>
                    <img
                        style={{ maxWidth: '148px', height: '197px' }}
                        className="d-block w-100"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-285x380.jpg"
                        alt="First slide"
                    />
                </Link>
            </div>

            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '20% 20% 20% 20% 20%' }}>
                <Link to={`/browseclips/Teamfight%20Tactics`}>
                    <img
                        style={{ maxWidth: '148px', height: '197px' }}
                        className="d-block w-100"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Teamfight%20Tactics-285x380.jpg"
                        alt="Second slide"
                    />
                </Link>
                <Link to={`/browseclips/Sea%20of%20Thieves`}>
                    <img
                        style={{ maxWidth: '148px', height: '197px' }}
                        className="d-block w-100"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Sea%20of%20Thieves-285x380.jpg"
                        alt="Third slide"
                    />
                </Link>
                <Link to={`/browseclips/Overwatch`}>
                    <img
                        style={{ maxWidth: '148px', height: '197px' }}
                        className="d-block w-100"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-285x380.jpg"
                        alt="First slide"
                    />
                </Link>
                <Link to={`/browseclips/World%20of%20Warcraft`}>
                    <img
                        style={{ maxWidth: '148px', height: '197px' }}
                        className="d-block w-100"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-285x380.jpg"
                        alt="Second slide"
                    />
                </Link>
                <Link to={`/browseclips/Animal%20Crossing:%20New%20Horizons`}>
                    <img
                        style={{ maxWidth: '148px', height: '197px' }}
                        className="d-block w-100"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Animal%20Crossing:%20New%20Horizons-285x380.jpg"
                        alt="Third slide"
                    />
                </Link>
            </div>
        </>
    );
};

export default BrowseClipsComponent;
import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeComp: React.SFC<{}> = ({}) => {

    return (
        <>
            <div style={{ margin: '50px 0', textAlign: 'center' }}>
                <h1 style={{ lineHeight: '1', fontSize: '72px', fontWeight: 700 }}>Rep yourself</h1>
                <h2 style={{ fontSize: '24px' }}>Real Gamers, Real Moments</h2>
            </div>
            <div style={{ width: '100vw', textAlign: 'center' }}>
                    <img
                        style={{ width:'20vw' }}
                        src="https://static-cdn.jtvnw.net/ttv-boxart/VALORANT-285x380.jpg"
                        alt="First slide"
                    />
                    <img
                        style={{ width:'20vw' }}
                        src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg"
                        alt="Second slide"
                    />
                    <img
                        style={{ width:'20vw' }}
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg"
                        alt="First slide"
                    />
                    <img
                        style={{ width:'20vw' }}
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-285x380.jpg"
                        alt="Second slide"
                    />
                    <img
                        style={{ width:'20vw' }}
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Modern%20Warfare-285x380.jpg"
                        alt="Third slide"
                    />
            </div>
            <footer style={{
                backgroundColor: 'black',
                position: 'absolute',
                bottom:'0',
                opacity:'90%',
                width: '100%',
                height: '4rem',
                padding: '1rem 0'
            }}>
                <p style={{ color: 'red', textAlign: 'center' }}>©James Lyons, 2020</p>
            </footer>
        </>
    );
};

export default HomeComp;

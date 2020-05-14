import React from 'react';
import { Carousel } from 'react-bootstrap';

interface State {

};

interface Props {

};

class Home extends React.PureComponent<Props, State> {

    static defaultProps = {

    };

    state: State = {

    };

    render() {
        return (
            <>
                <div style={{ margin: '50px 0', textAlign: 'center' }}>
                    <h1 style={{ lineHeight: '1', fontSize: '72px', fontWeight: 700 }}>Rep yourself</h1>
                    <h2 style={{ fontSize: '24px' }}>Real Gamers, Real Moments</h2>
                </div>
                <div style={{ width: '100vw', textAlign: 'center' }}>
                    <Carousel
                        controls={ false }
                        indicators={ false }
                        pause={ false }
                        keyboard={ false }
                        style={{ width:'20vw', display:'inline-block' }}
                    >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://static-cdn.jtvnw.net/ttv-boxart/VALORANT-285x380.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-285x380.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Carousel
                        controls={ false }
                        indicators={ false }
                        pause={ false }
                        keyboard={ false }
                        style={{ width:'20vw', display:'inline-block' }}
                    >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-285x380.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V-285x380.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Carousel
                        controls={ false }
                        indicators={ false }
                        pause={ false }
                        keyboard={ false }
                        style={{ width:'20vw', display:'inline-block' }}
                    >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-285x380.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://static-cdn.jtvnw.net/ttv-boxart/Escape%20From%20Tarkov-285x380.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Modern%20Warfare-285x380.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Carousel
                        controls={ false }
                        indicators={ false }
                        pause={ false }
                        keyboard={ false }
                        style={{ width:'20vw', display:'inline-block' }}
                    >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-285x380.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://static-cdn.jtvnw.net/ttv-boxart/Teamfight%20Tactics-285x380.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://static-cdn.jtvnw.net/ttv-boxart/Sea%20of%20Thieves-285x380.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Carousel
                        controls={ false }
                        indicators={ false }
                        pause={ false }
                        keyboard={ false }
                        style={{ width:'20vw', display:'inline-block' }}
                    >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-285x380.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-285x380.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://static-cdn.jtvnw.net/ttv-boxart/Animal%20Crossing:%20New%20Horizons-285x380.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
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
};

export default Home;

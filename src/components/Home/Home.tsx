import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Header } from 'semantic-ui-react';

const Home: React.SFC<{}> = ({}) => {

    const theme = localStorage.getItem('theme');

    return (
        <>
            <div id='home-page-container-div'>
                <Header as='h1' inverted={ theme === 'dark' } id='home-page-h1'>
                    Rep Yourself
                </Header>
                <Header as='h3' inverted={ theme === 'dark' } id='home-page-h2'>
                    Real Gamers, Real Awesome Moments
                </Header>
            </div>

            <Grid stackable columns={ 5 }>
                <Grid.Column className='column-item'>
                    <Image
                        as={ Link }
                        to={`/browseClips/Apex%20Legends`}
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-285x380.jpg"
                    />
                </Grid.Column>
                <Grid.Column className='column-item'>
                    <Image
                        as={ Link }
                        to={`/browseClips/League%20of%20Legends`}
                        src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg"
                    />
                </Grid.Column>
                <Grid.Column className='column-item'>
                    <Image
                        as={ Link }
                        to={`/browseClips/VALORANT`}
                        src="https://static-cdn.jtvnw.net/ttv-boxart/VALORANT-285x380.jpg"
                    />
                </Grid.Column>
                <Grid.Column className='column-item'>
                    <Image
                        as={ Link }
                        to={`/browseClips/Call%20of%20Duty:%20Modern%20Warfare`}
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Modern%20Warfare-285x380.jpg"
                    />
                </Grid.Column>
                <Grid.Column className='column-item'>
                    <Image
                        as={ Link }
                        to={`/browseClips/Fortnite`}
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg"
                    />
                </Grid.Column>
            </Grid>
        </>
    );
};

export default Home;

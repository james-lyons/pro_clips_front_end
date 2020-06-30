import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react';
import Footer from '../Footer/Footer';

const HomeComp: React.SFC<{}> = ({}) => {

    return (
        <>
            <div id='home-page-container-div'>
                <h1 id='home-page-h1'>Rep yourself</h1>
                <h2 id='home-page-h2'>Real Gamers, Real Moments</h2>
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

export default HomeComp;

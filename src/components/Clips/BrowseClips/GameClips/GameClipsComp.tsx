import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Props, Clip, ReduxProps } from './config';
import { Grid, Card, Header, Image, Container } from 'semantic-ui-react'
import clipReducer from '../../../../redux/reducers/clipReducer/clipReducer';

const GameClipsComp: React.SFC<Props> = ({ gameClips, history }) => {

    const clipMapper = (gameClips: Array<Clip>) => {
        const clipArr = gameClips.map((clip) =>

            <Grid.Column key={ clip._id }>
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
                        { clip.poster_name }
                    </Card.Description>
                </Card>
            </Grid.Column>

        );
         return clipArr;
    };
    
    const path = history.location.pathname.slice(13, history.location.pathname.length);
    const theme = localStorage.getItem('theme');
    const clip = gameClips[0];

    return (
        <>
            <Container id='game-clips-container'>
                <Header
                    as='h1'
                    id='game-clips-header'
                    inverted={ theme === 'dark' }
                >
                    <Image
                        rounded
                        as={ Link }
                        to={`/browseclips/${ path }`}
                        src={`https://static-cdn.jtvnw.net/ttv-boxart/${ path }-285x380.jpg`}
                    /> 
                    { clip.game }
                </Header>

                <Grid stackable={ true } columns={ 4 } id='game-clips-grid-container'>
                    { gameClips && clipMapper(gameClips) }
                </Grid>
            </Container>
        </>
    );
};

const mapStateToProps = (state: ReduxProps) => {
    return {
        gameClips: state.clipReducer.gameClips
    };
};

export default connect(mapStateToProps, null)(withRouter(GameClipsComp));

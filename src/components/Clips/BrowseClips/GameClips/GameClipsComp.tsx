import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Grid, Card, Header, Image, Container } from 'semantic-ui-react'
import { Props, Clip, ReduxProps } from './config';

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

    return (
        <>
            <Container id='game-clips-container'>
                <Header as='h1' id='game-clips-header'>
                    <Image
                        rounded
                        as={ Link }
                        to={`/browseclips/${ path }`}
                        src={`https://static-cdn.jtvnw.net/ttv-boxart/${ path }-285x380.jpg`}
                    /> 
                    Apex Legends
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

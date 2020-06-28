import React from 'react';
import { Props, Clip } from './config';
import { connect } from 'react-redux';
import { Grid, Card, Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const clipMapper = (clips: Array<Clip>) => {

    const clipArr = clips.map((clip: Clip) =>
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
    )

    return clipArr;
};

const PopularClipsComp: React.SFC<Props> = ({
    browseClips
}) => {

    return (
        <>
            <Grid id='popular-clips-grid-container' container stackable>

                <Header as='h1' className='popular-clip-category-header'>
                    <Image
                        rounded
                        as={ Link }
                        to={`/browseclips/Apex%20Legends`}
                        src='https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-285x380.jpg'
                    /> 
                    Apex Legends
                </Header>

                <Grid.Row columns={ 4 } className='popular-clips-row'>
                    { browseClips.ApexLegends && clipMapper(browseClips.ApexLegends) }
                </Grid.Row>

                <Header as='h1' className='popular-clip-category-header'>
                    <Image
                        rounded
                        as={ Link }
                        to={`/browseclips/League%20of%20Legends`}
                        src='https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg'
                    /> League of Legends
                </Header>

                <Grid.Row columns={ 4 } className='popular-clips-row'>
                    { browseClips.LeagueOfLegends && clipMapper(browseClips.LeagueOfLegends) }
                </Grid.Row>

                <Header as='h1' className='popular-clip-category-header'>
                    <Image
                        rounded
                        as={ Link }
                        to={`/browseclips/Call%20of%20Duty:%20Modern%20Warfare`}
                        src='https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Modern%20Warfare-285x380.jpg'
                    /> COD: Warzone
                </Header>

                <Grid.Row columns={ 4 } className='popular-clips-row'>
                    { browseClips.CODWarzone && clipMapper(browseClips.CODWarzone) }
                </Grid.Row>

                <Header as='h1' className='popular-clip-category-header'>
                    <Image
                        rounded
                        as={ Link }
                        to={`/browseclips/Valorant`}
                        src='https://static-cdn.jtvnw.net/ttv-boxart/VALORANT-285x380.jpg'
                    /> Valorant
                </Header>

                <Grid.Row columns={ 4 } className='popular-clips-row'>
                    { browseClips.Valorant && clipMapper(browseClips.Valorant) }
                </Grid.Row>

                <Header as='h1' className='popular-clip-category-header'>
                    <Image
                        rounded
                        as={ Link }
                        to={`/browseclips/Fortnite`}
                        src='https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg'
                    /> Fornite
                </Header>

                <Grid.Row columns={ 4 } className='popular-clips-row'>
                    { browseClips.Fortnite && clipMapper(browseClips.Fortnite) }
                </Grid.Row>
            </Grid>
        </>
    );
};

const mapStateToProps = (state: any) => {
    return {
        browseClips: state.clipReducer.browseClips
    };
};

export default connect(mapStateToProps, null)(PopularClipsComp);

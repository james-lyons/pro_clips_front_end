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

const PopularClipsComp: React.SFC<{ browseClips: Array<object> }> = ({
    browseClips
}) => {
    return (
        <>
            <div style={{ marginTop: '2.5rem', padding: '0 auto' }}>
                <h1 style={{ fontSize: '2rem' }}>Apex Legends</h1>
                { browseClips.ApexLegends && clipMapper(browseClips.ApexLegends) }
            </div>
            <div style={{ marginTop: '2.5rem' }}>
                <h1 style={{ fontSize: '2rem' }}>C.O.D. Warzone</h1>
                { browseClips.CODWarzone && clipMapper(browseClips.CODWarzone) }
            </div>
            <div style={{ marginTop: '2.5rem' }}>
                <h1 style={{ fontSize: '2rem' }}>League of Legends</h1>
                { browseClips.LeagueOfLegends && clipMapper(browseClips.LeagueOfLegends) }
            </div>
            <div style={{ marginTop: '2.5rem' }}>
                <h1 style={{ fontSize: '2rem' }}>Valorant</h1>
                { browseClips.Valorant && clipMapper(browseClips.Valorant) }
            </div>
            <div style={{ marginTop: '2.5rem' }}>
                <h1 style={{ fontSize: '2rem' }}>Fortnite</h1>
                { browseClips.Fortnite && clipMapper(browseClips.Fortnite) }
            </div>
        </>
    );
};

const mapStateToProps = (state: any) => {
    return {
        browseClips: state.clipReducer.browseClips
    };
};

export default connect(mapStateToProps, null)(PopularClipsComp);
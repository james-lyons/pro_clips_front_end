import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const BrowseClipsComponent: React.SFC<{}> = () => {

    const gridItems = ['Apex%20Legends', 'League%20of%20Legends', 'VALORANT', 'Fortnite', 'Overwatch', 'Counter-Strike:%20Global%20Offensive', 'Escape%20From%20Tarkov', 'Call%20of%20Duty:%20Modern%20Warfare', 'Grand%20Theft%20Auto%20V', 'Dota%202', 'Sea%20of%20Thieves', 'World%20of%20Warcraft', 'Hearthstone', 'Teamfight%20Tactics', 'Animal%20Crossing:%20New%20Horizons']

    const gridMapper = (gridItems: Array<string>) => {

        const gridArray = gridItems.map((gridItem) => 
            <Grid.Column key={ gridItem } className='browser-clips-column column-item'>
                <Image
                    as={ Link }
                    to={`/browseclips/${ gridItem }`}
                    className='browser-clips-image'
                    src={`https://static-cdn.jtvnw.net/ttv-boxart/${ gridItem }-285x380.jpg`}
                />
            </Grid.Column>
        );

        return gridArray
    };

    return (
        <>
            <Grid stackable container columns={ 5 } id='browser-clips-grid'>
                { gridMapper(gridItems) }
            </Grid>
        </>
    );
};

export default BrowseClipsComponent;

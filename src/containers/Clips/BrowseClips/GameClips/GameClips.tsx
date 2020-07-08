import React from 'react';
import { connect } from 'react-redux';
import { Props, ReduxState } from './config';
import { fetchGameClips } from '../../../../redux/actions/clipActions/clipActions';
import GameClipsComp from '../../../../components/Clips/BrowseClips/GameClips/GameClipsComp';
import UnavailableComp from '../../../../components/Unavailable/UnavailableComp';

class GameClips extends React.PureComponent<Props> {

    componentDidMount = async () => {
        const { match, fetchGameClips } = this.props;
        await fetchGameClips(match.params.game);
    };

    render() {
        const { gameClips } = this.props;

        return (
            <>
                { gameClips && gameClips.length > 0 && <GameClipsComp /> || <UnavailableComp /> }
            </>
        );
    };
};

const mapStateToProps = (state: ReduxState) => {
    return {
        gameClips: state.clipReducer.gameClips
    };
};

export default connect(mapStateToProps, { fetchGameClips })(GameClips);
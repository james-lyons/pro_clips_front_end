import React from 'react';
import { connect } from 'react-redux';
import { Props, ReduxState } from './config';
import { fetchGameClips } from '../../../../redux/actions/clipActions/clipActions';
import GameClipsComp from '../../../../components/Clips/BrowseClips/GameClips/GameClipsComp';

class GameClips extends React.PureComponent<Props> {

    componentDidMount = async () => {
        const { match, fetchGameClips } = this.props;
        await fetchGameClips(match.params.game);
    };

    render() {
        return (
            <>
                <div className="col-lg-10 col-md-12 col-sm-12 mb-4" style={{ margin: '0 auto' }}>
                    { this.props.gameClips && <GameClipsComp /> }
                </div>
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
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Props, State } from './config';
import { fetchGameClips } from '../../../../redux/actions/clipActions/clipActions';
import GameClipsComp from '../../../../components/Clips/BrowseClips/GameClips/GameClipsComp';

class GameClips extends React.PureComponent <Props, State> {
    state = {

    };

    componentDidMount = async () => {
        await this.props.fetchGameClips(this.props.match.params.game);
        console.log(this.props.gameClips);
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

const mapStateToProps = (state: any) => {
    return {
        gameClips: state.clipReducer.gameClips
    };
};

export default connect(mapStateToProps, { fetchGameClips })(withRouter(GameClips));
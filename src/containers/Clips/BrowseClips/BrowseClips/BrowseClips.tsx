import React from 'react';
import { connect } from 'react-redux';
import { Props, ReduxState } from './config';
import { fetchBrowseClips } from '../../../../redux/actions/clipActions/clipActions';
import BrowseClipsComponent from '../../../../components/Clips/BrowseClips/BrowseClips/BrowseClipsComp';

class BrowseClips extends React.PureComponent<Props> {

    componentDidMount = async () => {
        await this.props.fetchBrowseClips();
    };

    render() {
        return (
            <>
                { this.props.browseClips && <BrowseClipsComponent /> }
            </>
        );
    };
};

const mapStateToProps = (state: ReduxState) => {
    return {
        browseClips: state.clipReducer.browseClips
    };
};

export default connect(mapStateToProps, { fetchBrowseClips })(BrowseClips);

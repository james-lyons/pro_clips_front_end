import React from 'react';
import { connect } from 'react-redux';
import { fetchBrowseClips } from '../../redux/actions/clipActions/clipActions';
import { Props, State } from './config';
import BrowseClipsComponent from '../../components/BrowseComponent/BrowseClipsComponent';

class BrowseClips extends React.PureComponent<Props, State> {

    state: State = {

    };

    componentDidMount = async () => {
        await this.props.fetchBrowseClips();
    };

    render() {
        return (
            <div className="col-lg-10 col-md-12 col-sm-12 mb-4" style={{ margin: '0 auto' }}>
                { this.props.browseClips && <BrowseClipsComponent /> }
            </div>
        );
    };
};

const mapStateToProps = (state: any) => {
    return {
        browseClips: state.clipReducer.browseClips
    };
};

export default connect(mapStateToProps, { fetchBrowseClips })(BrowseClips);

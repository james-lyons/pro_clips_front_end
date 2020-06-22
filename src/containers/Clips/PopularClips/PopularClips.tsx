import React from 'react';
import { connect } from 'react-redux';
import { Props, ReduxState } from './config';
import { fetchBrowseClips } from '../../../redux/actions/clipActions/clipActions';
import PopularClipsComp from '../../../components/Clips/PopularClips/PopularClipsComp';

class PopularClips extends React.PureComponent<Props> {
    componentDidMount = async () => {
        await this.props.fetchBrowseClips();
    };

    render() {
        const { browseClips } = this.props;
        
        return (
            <div
                className="col-lg-10 col-md-12 col-sm-12 mb-4"
                style={{ margin: '0 auto' }}
            >
                { browseClips && <PopularClipsComp /> }
            </div>
        );
    };
};

const mapStateToProps = (state: ReduxState) => {
    return {
        browseClips: state.clipReducer.browseClips
    };
};

export default connect(mapStateToProps, { fetchBrowseClips })(PopularClips);

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Props, State, ReduxState, Event } from './config';
import { editClip, deleteClip } from '../../../redux/actions/clipActions/clipActions';
import UserClipSettingsComp from '../../../components/Clips/ClipSettings/UserClipSettings/UserClipSettingsComp';

class UserClipSettings extends React.PureComponent<Props & RouteComponentProps, State> {

    state: State = {
        clipVis: 'none',
        newTitle: ''
    };

    private handleChange = (event: Event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleClipEdit = () => {
        event.preventDefault();
        const { editClip, clip } = this.props;
        const { newTitle } = this.state;

        editClip(clip._id, newTitle);
        this.showClip();
    };

    private handleClipDelete = (clipId: string) => {
        const { history, clip, deleteClip } = this.props;

        deleteClip(clipId);
        history.push(`/${ clip.poster_name }`)
    };

    private showClip = () => {
        const { clipVis } = this.state;

        if (clipVis === '') {
            this.setState({
                clipVis: 'none'
            });
        } else if (clipVis === 'none') {
            this.setState({
                clipVis: ''
            });
        };
    };

    render() {
        const { clip } = this.props;
        const { clipVis, newTitle } = this.state;
        const { showClip, handleChange, handleClipEdit, handleClipDelete } = this;

        return (
            <UserClipSettingsComp
                clip={ clip }
                clipVis={ clipVis }
                newTitle={ newTitle }
                showClip={ showClip }
                handleChange={ handleChange }
                handleClipEdit={ handleClipEdit }
                handleClipDelete={ handleClipDelete }
            />
        );
    };
};

const mapStateToProps = (state: ReduxState) => {
    return {
        clip: state.clipReducer.clip
    };
};

export default connect(mapStateToProps, { editClip, deleteClip })(withRouter(UserClipSettings));

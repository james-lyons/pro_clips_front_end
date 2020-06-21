import React from 'react';
import { Props, State } from './config';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editClip, deleteClip } from '../../../redux/actions/clipActions/clipActions';
import UserClipSettingsComp from '../../../components/Clips/ClipSettings/UserClipSettings/UserClipSettingsComp';

class UserClipSettings extends React.PureComponent<Props, State> {

    state: State = {
        clipVis: 'none',
        newTitle: ''
    };

    private handleChange = () => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleClipEdit = () => {
        const { editClip, clip } = this.props;
        const { newTitle } = this.state;

        event.preventDefault();
        editClip(clip._id, newTitle);
        this.showClip();
    };

    private handleClipDelete = (clipId: string) => {
        const { deleteClip, history, clip } = this.props;

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

const mapStateToProps = (state: any) => {
    return {
        clip: state.clipReducer.clip
    };
};

export default connect(mapStateToProps, { editClip, deleteClip })(withRouter(UserClipSettings));

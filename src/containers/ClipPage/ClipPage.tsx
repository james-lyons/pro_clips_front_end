import React from 'react';
import { connect } from 'react-redux';
import ClipPageComponent from '../../components/ClipPage/ClipPageComponent';
import { State, Props } from './config';
import { fetchClip, editClip, deleteClip } from '../../redux/actions/clipActions/clipActions';

class ClipPage extends React.PureComponent<Props, State> {
    state: State = {
        clip: null,
        clipVis: 'display',
        newTitle: ''
    };

    componentDidMount = async () => {
        await this.props.fetchClip(this.props.match.params.clipId);
        this.setState({
            clip: this.props.clip
        });
    };

    private handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleClipEdit = (clipId: string) => {
        this.props.editClip(clipId, this.state.newTitle);
    };

    private handleClipDelete = (clipId: string) => {
        this.props.deleteClip(clipId);
        this.props.history.push(`/${ this.props.user.userName }`)
    };

    private showClip = () => {
        const { clipVis } = this.state;

        if (clipVis === 'display') {
            this.setState({
                clipVis: 'none'
            });
        } else {
            this.setState({
                clipVis: 'display'
            });
        };
    };

    render() {
        const { clip, clipVis, newTitle } = this.state;
        const { showClip, handleChange, handleClipEdit, handleClipDelete } = this;

        return (
            <>
                {
                    clip && 
                    <ClipPageComponent
                        clip={ clip }
                        clipVis={ clipVis }
                        newTitle={ newTitle }
                        showClip={ showClip }
                        handleChange={ handleChange }
                        handleClipEdit={ handleClipEdit }
                        handleClipDelete={ handleClipDelete }
                    />
                }
            </>
        );
    };
};

const mapStateToProps = (state: any) => {
    return {
        clip: state.clipReducer.clip,
        user: state.userReducer.user
    };
};

export default connect(mapStateToProps, { fetchClip, editClip, deleteClip })(ClipPage);

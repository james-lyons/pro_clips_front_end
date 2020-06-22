import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event, ReduxState } from './config';
import { fetchClip, editClip, deleteClip } from '../../../redux/actions/clipActions/clipActions';
import ClipPageComponent from '../../../components/Clips/ClipPage/ClipPage/ClipPageComp';

class ClipPage extends React.PureComponent<Props, State> {
    state: State = {
        clip: null,
        clipVis: 'display',
        newTitle: '',
        showLoginModal: false
    };

    componentDidMount = async () => {
        await this.props.fetchClip(this.props.match.params.clipId);
        this.setState({
            clip: this.props.clip
        });
    };

    private handleChange = (event: Event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleClipEdit = (clipId: string) => {
        const { newTitle } = this.state;
        const { editClip } = this.props;

        editClip(clipId, newTitle);
    };

    private handleClipDelete = (clipId: string) => {
        const { user, history, deleteClip } = this.props;

        deleteClip(clipId);
        history.push(`/${ user.userName }`)
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

    private handleShowLoginModal = async () => {
        this.setState({
            showLoginModal: true
        });
    };

    private handleCloseLoginModal = () => {
        this.setState({
            showLoginModal: false
        });
    };

    render() {
        const { clip, clipVis, newTitle, showLoginModal } = this.state;
        const {
            showClip,
            handleChange,
            handleClipEdit,
            handleClipDelete,
            handleShowLoginModal,
            handleCloseLoginModal
        } = this;

        return (
            <>
                {
                    clip && 
                    <ClipPageComponent
                        clip={ clip }
                        clipVis={ clipVis }
                        newTitle={ newTitle }
                        showLoginModal={ showLoginModal }
                        showClip={ showClip }
                        handleChange={ handleChange }
                        handleClipEdit={ handleClipEdit }
                        handleClipDelete={ handleClipDelete }
                        handleShowLoginModal={ handleShowLoginModal }
                        handleCloseLoginModal={ handleCloseLoginModal }
                    />
                }
            </>
        );
    };
};

const mapStateToProps = (state: ReduxState) => {
    return {
        clip: state.clipReducer.clip,
        user: state.userReducer.user
    };
};

export default connect(mapStateToProps, { fetchClip, editClip, deleteClip })(ClipPage);

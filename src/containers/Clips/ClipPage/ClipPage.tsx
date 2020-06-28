import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event, ReduxState } from './config';
import { fetchUser } from '../../../redux/actions/userActions/userActions';
import { fetchClip, editClip, deleteClip } from '../../../redux/actions/clipActions/clipActions';
import ClipPageComponent from '../../../components/Clips/ClipPage/ClipPage/ClipPageComp';

class ClipPage extends React.PureComponent<Props, State> {
    state: State = {
        clip: null,
        user: null,
        newTitle: '',
        editFormVis: false
    };

    componentDidMount = async () => {
        const { match, fetchClip, fetchUser } = this.props;

        await fetchClip(match.params.clipId);
        await fetchUser(this.props.clip.poster_name);

        const { clip, user } = this.props;

        this.setState({ clip, user });
    };

    private handleChange = (event: Event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleClipEdit = async () => {
        const { clip, newTitle } = this.state;
        const { match, editClip, fetchClip } = this.props;

        await editClip(clip._id, newTitle);
        await fetchClip(clip._id);
        this.setState({
            newTitle: null,
            editFormVis: false,
            clip: this.props.clip,
        })
    };

    private handleClipDelete = (clipId: string) => {
        const { user, history, deleteClip } = this.props;

        deleteClip(clipId);
        history.push(`/${ user.username }`)
    };

    private handleFormVis = () => {
        const { editFormVis } = this.state;

        this.setState({ editFormVis: !editFormVis })
    };

    render() {
        const { clip, user, newTitle, editFormVis } = this.state;
        const {
            handleChange,
            handleFormVis,
            handleClipEdit,
            handleClipDelete,
        } = this;

        return (
            <>
                {
                    clip && 
                    <ClipPageComponent
                        clip={ clip }
                        user={ user }
                        editFormVis={ editFormVis }
                        newTitle={ newTitle }
                        handleChange={ handleChange }
                        handleFormVis={ handleFormVis }
                        handleClipEdit={ handleClipEdit }
                        handleClipDelete={ handleClipDelete }
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

export default connect(mapStateToProps, { fetchClip, editClip, deleteClip, fetchUser })(ClipPage);

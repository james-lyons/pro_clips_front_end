import React from 'react';
import ClipPageComponent from '../../components/ClipPageComponent/ClipPageComponent';
import { connect } from 'react-redux';
import { State, Props } from './config';
import { fetchClip, editClip, deleteClip } from '../../redux/actions/clipActions/clipActions';

class ClipPage extends React.PureComponent<Props, State> {
    state: State = {
        clip: null
    };

    componentDidMount = async () => {
        await this.props.fetchClip(this.props.match.params.clipId);
        this.setState({
            clip: this.props.clip
        });
        console.log(this.state)
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
    };


    render() {
        const { } = this.props;
        const { clip } = this.state;
        const { handleChange, handleClipEdit, handleClipDelete } = this;

        return (
            <>
                {
                    clip && 
                    <ClipPageComponent
                        clip={ clip }
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
        clip: state.clipReducer.clip
    };
};

export default connect(mapStateToProps, { fetchClip, editClip, deleteClip })(ClipPage);

import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event } from './config';
import { uploadClip } from '../../../redux/actions/clipActions/clipActions';
import ClipUploadComponent from '../../../components/Clips/ClipUpload/ClipUploadComp';

class ClipUpload extends React.PureComponent<Props, State> {
    state: State = {
        clip: null,
        title: '',
        game: ''
    };

    private handleSelect = (event: Event) => {
        let files = event.target.files;
        let file = files[0]

        this.setState({
            clip: file
        });
    };

    private handleChange = (event: Event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleUploadClip = async () => {
        event.preventDefault();
        const { clip, game, title} = this.state;
        const { uploadClip } = this.props;

        await uploadClip(clip, title, game)
    };

    render() {
        const { title, game } = this.state;
        const { handleUploadClip, handleSelect, handleChange } = this;

        return (
            <>
                <ClipUploadComponent
                    game={ game }
                    title={ title }
                    handleUploadClip={ handleUploadClip }
                    handleSelect={ handleSelect }
                    handleChange={ handleChange }
                />
            </>
        );
    }
};

export default connect(null, { uploadClip })(ClipUpload);

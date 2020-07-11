import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event } from './config';
import { uploadClip } from '../../../redux/actions/clipActions/clipActions';
import ClipUploadComponent from '../../../components/Clips/ClipUpload/ClipUploadComp';

class ClipUpload extends React.PureComponent<Props, State> {
    state: State = {
        clip: null,
        title: '',
        game: null,
        error: false,
        fileError: false,
        isLoading: false,
        wasSubmitted: false,
        submitSuccess: false,
    };

    private handleSelect = (event: Event) => {
        let files = event.target.files;
        let file = files[0]

        if (file.size > 7500000) { 
            this.setState({ fileError: true });
        } else {
            this.setState({
                clip: file,
                fileError: false 
            });
        };
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

        if (!game || game === 'Select') {
            this.setState({ error: true });
            return;
        };

        this.setState({ isLoading: true });

        const res = await uploadClip(clip, title, game);

        if (res.payload < 400) {
            this.setState({ wasSubmitted: !this.state.wasSubmitted });
            this.setState({ submitSuccess: !this.state.submitSuccess });
            return;
        };

        await this.setState({
            title: '',
            clip: null,
            game: 'Select',
            isLoading: false
        });
    };

    render() {
        const { title, error, fileError, isLoading, wasSubmitted, submitSuccess } = this.state;
        const { handleUploadClip, handleSelect, handleChange } = this;

        return (
            <>
                <ClipUploadComponent
                    title={ title }
                    error={ error }
                    fileError={ fileError }
                    isLoading={ isLoading }
                    wasSubmitted={ wasSubmitted }
                    submitSuccess={ submitSuccess }
                    handleSelect={ handleSelect }
                    handleChange={ handleChange }
                    handleUploadClip={ handleUploadClip }
                />
            </>
        );
    }
};

export default connect(null, { uploadClip })(ClipUpload);

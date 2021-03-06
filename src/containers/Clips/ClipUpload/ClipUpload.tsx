import React from 'react';
import { connect } from 'react-redux';
import { State, Props, Event } from './config';
import { uploadClip } from '../../../redux/actions/clipActions/clipActions';
import ClipUploadComponent from '../../../components/Clips/ClipUpload/ClipUploadComp';
import { fileURLToPath } from 'url';

class ClipUpload extends React.PureComponent<Props, State> {
    state: State = {
        clip: null,
        title: '',
        game: null,
        isLoading: false,
        gameError: false,
        fileError: false,
        titleError: false,
        submitSuccess: false,
    };

    private handleSelect = (event: Event) => {
        let files = event.target.files;
        let file = files[0]

        if (file.size > 75000000) { 
            this.setState({ fileError: true });
            return;

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
            this.setState({ gameError: true });
            return;
        } else if (!title || title.length > 50) {
            this.setState({ titleError: true });
            return;

        } else if (!clip || clip.size > 75000000) {
            this.setState({ fileError: true });
            return;
        };

        this.setState({ isLoading: true });

        const res = await uploadClip(clip, title, game);

        if (res.payload < 400) {
            this.setState({
                title: '',
                clip: null,
                game: 'Select',
                isLoading: false,
                submitSuccess: true,
            });
            return;
        } else if (res.payload > 400) {
            this.setState({ isLoading: false })
        };
    };

    render() {
        const {
            title,
            isLoading,
            gameError,
            fileError,
            titleError,
            submitSuccess
        } = this.state;
        const { handleUploadClip, handleSelect, handleChange } = this;

        return (
            <>
                <ClipUploadComponent
                    title={ title }
                    isLoading={ isLoading }
                    fileError={ fileError }
                    gameError={ gameError }
                    titleError={ titleError }
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

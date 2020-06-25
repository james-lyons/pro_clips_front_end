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
        wasSubmitted: false,
        error: false
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
        console.log(this.state.game)
    };

    private handleSubmitVer = () => {
        this.setState((prevState) => ({ wasSubmitted: !prevState.wasSubmitted }));
    };

    private handleUploadClip = async () => {
        event.preventDefault();
        const { clip, game, title} = this.state;
        const { uploadClip } = this.props;

        if (!game || game === 'Select') {
            this.setState({
                error: true
            });
            console.log(this.state.error)
            return;
        };

        console.log(this.state);

        const res = await uploadClip(clip, title, game);
        await this.setState({
            clip: null,
            title: '',
            game: ''
        })
        console.log(res);
        this.handleSubmitVer();
    };

    render() {
        const { title, wasSubmitted, error } = this.state;
        const { handleUploadClip, handleSelect, handleChange, handleSubmitVer } = this;

        return (
            <>
                <ClipUploadComponent
                    error={ error }
                    title={ title }
                    wasSubmitted={ wasSubmitted }
                    handleSelect={ handleSelect }
                    handleChange={ handleChange }
                    handleUploadClip={ handleUploadClip }
                />
            </>
        );
    }
};

export default connect(null, { uploadClip })(ClipUpload);

import React from 'react';
import { connect } from 'react-redux';
import ClipUploadComponent from '../../../components/Clips/ClipUpload/ClipUploadComponent';
import { uploadClip } from '../../../redux/actions/clipActions/clipActions';

interface State {
    clip: null | object,
    game: null | string,
    title: string
};

class ClipUpload extends React.PureComponent<Props, State> {

    static defaultProps = {

    };

    state: State = {
        clip: null,
        title: '',
        game: ''
    };

    private handleSelect = (event: any) => {
        let files = event.target.files;
        let file = files[0]

        console.log('FILES', files);
        console.log('FILE', file);

        this.setState({
            clip: file
        });
    };

    private handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    };


    private uploadClip = async () => {
        event.preventDefault();
        const { clip, game, title} = this.state;
        await this.props.uploadClip(clip, title, game)
    };

    render() {
        const { title, game } = this.state;
        const { uploadClip, handleSelect, handleChange } = this;

        return (
            <>
                <ClipUploadComponent
                    title={ title }
                    uploadClip={ uploadClip }
                    game={ game }
                    handleSelect={ handleSelect }
                    handleChange={ handleChange }
                />
            </>
        );
    }
};

export default connect(null, { uploadClip })(ClipUpload);
